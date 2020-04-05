import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from 'mongoose'
import { ConsumerDto, EstablishmentDto } from "../models/consumer.dto";

@Injectable()
export class AuthService {
    
    constructor(
        @InjectModel('Consumer') private consumerModel: Model<ConsumerDto>,
        @InjectModel('Establishment') private establishmentModel: Model<EstablishmentDto>
        ) {}

    async create(consumerDto: ConsumerDto): Promise<ConsumerDto>{
        const createdConsumer = new this.consumerModel(consumerDto);
        return await createdConsumer.save();
    }

    async pegarPerfil(id: string){
        return await this.consumerModel.findById(id).exec();
    }
}