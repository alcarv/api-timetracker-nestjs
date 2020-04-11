import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose'
import { ConsumerDto } from "../models/dto/consumer.dto";
import { EstablishmentDto } from "src/models/dto/establishment.dto";

@Injectable()
export class AuthService {
    
    constructor(
        @InjectModel('Consumer') private consumerModel: Model<ConsumerDto>,
        @InjectModel('Establishment') private establishmentModel: Model<EstablishmentDto>
        ) {}

    async createConsu(consumerDto: ConsumerDto): Promise<ConsumerDto>{
        const createdConsumer = new this.consumerModel(consumerDto);
        return await createdConsumer.save();
    }

    async createEstab(establishment:EstablishmentDto): Promise<EstablishmentDto> {
        const createEstablishment = new this.establishmentModel(establishment);
        return await createEstablishment.save()
    }

    async pegarPerfilConsu(id: string): Promise<ConsumerDto>{
        return await this.consumerModel.findById(id).exec();
    }

    async pegarPerfilEstab(id: string): Promise<EstablishmentDto>{
        return await this.establishmentModel.findById(id).exec();
    }

    async compLoginEstab(imail: String, senha: String): Promise<EstablishmentDto> {
        return await this.establishmentModel.find({email : imail, pswd : senha}).exec();
    }
}