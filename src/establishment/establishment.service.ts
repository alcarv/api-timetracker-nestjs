import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { EstablishmentDto } from "src/models/dto/establishment.dto";
import { TypeDto } from 'src/models/dto/type.dto';
import { GenericMessage } from "src/models/dto/genericMessage.dto";
import { Reserva } from "src/models/dto/reserva.dto";

@Injectable()
export class EstablishmentService {
    constructor(
        @InjectModel('Establishment') private establishmentModel: Model<EstablishmentDto>,
        @InjectModel('Type') private typeModel: Model<TypeDto>
    ) {}

        async pegarPorTipo(tipo: string): Promise<EstablishmentDto[]> {
            return await this.establishmentModel.find({arrTipo: { $regex: '.*' + tipo + '.*' } }).exec();
        }

        async pegarPorTipoENome(tipo: string, nome: string): Promise<EstablishmentDto[]> {
            return await this.establishmentModel.find({nome: { $regex: '.*' + nome + '.*' }}).find({arrTipo: { $regex: '.*' + tipo + '.*' }}).exec();
        }

        async filtrarTipos(filtro: string): Promise<TypeDto[]> {
            return await this.typeModel.find({nome: { $regex: '.*' + filtro + '.*' } }).exec();
        }

        async pegarPorId(id: string): Promise<EstablishmentDto> {
            return await this.establishmentModel.findById(id).exec();
        }

        async adicionartipos(tipo: TypeDto): Promise<TypeDto>{
            const createdType = new this.typeModel(tipo);
            return await createdType.save(); 
        }

        async pegarTodosOstipos(): Promise<TypeDto[]>{
            return await this.typeModel.find().exec();
        }

        async removeReserva(reserva: Reserva): Promise<GenericMessage>{

            //retorna o estabelecimento e todos os seus horários
            let estab: EstablishmentDto = await this.establishmentModel.findById(reserva.idEstab).exec();

            estab.horarios.splice(estab.horarios.findIndex(hor => hor.dia.getMonth() == new Date(reserva.dia).getMonth() && hor.dia.getDay() == new Date(reserva.dia).getDay() && hor.horario == reserva.horario), 1);
            
            await this.establishmentModel.findByIdAndUpdate(reserva.idEstab, estab);

            return new Promise(function (resolve, reject){
                resolve();
            }).then(res => {
                return new GenericMessage(200, "Reserva removida!");
            }); 
        }
}