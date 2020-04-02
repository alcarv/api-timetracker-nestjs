import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from 'mongoose'
import { ConsumerDto } from "./models/consumer.dto";


@Injectable()
export class ConsumerService {

    constructor(@InjectModel('Consumer') private consumerModel: Model<ConsumerDto>) {}

    async create(consumerDto: ConsumerDto): Promise<ConsumerDto>{
        const createdConsumer = new this.consumerModel(consumerDto);
        return await createdConsumer.save();
    }

    async getAll() {
        return await this.consumerModel.find().exec();
    }

    async pegarPerfil(id: string){
        return await this.consumerModel.findById(id).exec();
    }
}