import { Document } from 'mongoose';

export interface Consumer extends Document {
  readonly nome: String;
  readonly idade: Number;
  readonly fotoPerfil: String;
}