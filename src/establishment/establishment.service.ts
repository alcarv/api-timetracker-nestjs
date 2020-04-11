import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { EstablishmentDto } from "src/models/dto/establishment.dto";

@Injectable()
export class EstablishmentService {
    constructor(@InjectModel('Establishment') private establishmentModel: Model<EstablishmentDto>) {}

        async pegarPorTipo(tipo: string): Promise<EstablishmentDto[]> {
            return await this.establishmentModel.find({arrTipo : tipo}).exec();
        }

        async pegarPorId(id: string): Promise<EstablishmentDto> {
            return await this.establishmentModel.findById(id).exec();
        }
}