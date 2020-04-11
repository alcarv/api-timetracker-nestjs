import { Injectable } from "@nestjs/common";
import { Establishment } from "../models/establishment.schema"
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';

@Injectable()
export class EstablishmentService {
    constructor(@InjectModel('Establishment') private establishmentModel: Model<Establishment>) {}
        
        async create(establishment:Establishment) {
            const createEstablishment = new this.establishmentModel(establishment);
            return await createEstablishment.save()
        }

        async getByType(arrTipo: []) {
            return await this.establishmentModel.find({arrTipo : [arrTipo]}).exec();
        }
}