import * as mongoose from 'mongoose';

export const EstablishmentSchema = new mongoose.Schema({
    nome: String,
    email:String,
    pswd: String,
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
        dia: Date,
        horario: String,
        cliente: String,
        email: String,
        formaPgto: String,
        servico: String
    }]
});