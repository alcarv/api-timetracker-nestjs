import * as mongoose from 'mongoose';
import { Document } from 'mongoose'
import { ValoresDto } from './valores.dto';
import { ConfiguracoesDto } from './configuracoes.dto';
import { HorariosDto } from './horarios.dto';

export const EstablishmentSchema = new mongoose.Schema({
    nome: String,
    arrTipo: [String],
    endereço: String,
    nrDocumento: String,
    descricao: String,
    valores: [{
        servico: String,
        preco: String
    }],
    configuracoes: {
        inicio: String,
        fim: String,
        duracao: String,
        expediente: [Number]
    },
    horarios: [{
        horario: Number,
        disponivel: Boolean,
        cliente: String,
        formaPgto: String,
    }]
});

export class Establishment extends Document {
    nome: String;
    arrTipo: [String];
    endereço: String;
    nrDocumento: String;
    descricao: String;
    valores: [{
        servico: String;
        preco: String
    }];
    configuracoes: {
        inicio: String;
        fim: String;
        duracao: String;
        expediente: [Number]
    };
    horarios: [{
        horario: Number;
        disponivel: Boolean;
        cliente: String;
        formaPgto: String;
    }]
}