import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose'
import { Consumer } from "./models/consumer.interface";
import { ConsumerDto } from "./models/consumer.dto";


@Injectable()
export class ConsumerService {

    constructor(@InjectModel('Consumer') private consumerModel: Model<Consumer>) {}

    async create(consumerDto: ConsumerDto): Promise<Consumer>{
        const createdConsumer = new this.consumerModel(consumerDto);
        return createdConsumer.save();
    }

    async getAll() {
        return await this.consumerModel.find().exec();
    }
}