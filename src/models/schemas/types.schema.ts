import * as mongoose from 'mongoose';

export const TypeSchema = new mongoose.Schema({
  nome: String,
  imgUrl: String
});