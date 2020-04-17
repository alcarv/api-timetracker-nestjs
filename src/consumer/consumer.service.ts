import { Injectable } from "@nestjs/common";
import { Model } from 'mongoose';
import { EstablishmentDto } from "src/models/dto/establishment.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Reserva } from "src/models/dto/reserva.dto";
import { GenericMessage } from "src/models/dto/genericMessage.dto";

@Injectable()
export class ConsumerService {

    constructor(@InjectModel('Establishment') private establishmentModel: Model<EstablishmentDto>) {}

    async reservarHorario(reserva: Reserva): Promise<GenericMessage> {

        //retorna o estabelecimento e todos os seus horários
        let estab: EstablishmentDto = await this.establishmentModel.findById(reserva.idEstab).exec();

        estab.horarios.push({
            dia: reserva.dia,
            horario: reserva.horario,
            cliente: reserva.nome,
            email: reserva.email,
            formaPgto: reserva.formaPgto
        })

        await this.establishmentModel.findByIdAndUpdate(reserva.idEstab, estab);

        return new Promise(function (resolve, reject){
            resolve();
        }).then(res => {
            return new GenericMessage(200, "Reserva Realizada");
        })
    }

}