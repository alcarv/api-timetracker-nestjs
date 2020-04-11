import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { EstablishmentDto } from "src/models/dto/establishment.dto";
import { TypeDto } from 'src/models/dto/type.dto';

@Injectable()
export class EstablishmentService {
    constructor(
        @InjectModel('Establishment') private establishmentModel: Model<EstablishmentDto>,
        @InjectModel('Type') private typeModel: Model<TypeDto>
    ) {}

        async pegarPorTipo(tipo: string): Promise<EstablishmentDto[]> {
            return await this.establishmentModel.find({arrTipo : tipo}).exec();
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
}