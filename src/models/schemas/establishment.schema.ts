import * as mongoose from 'mongoose';

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
        dia: Date,
        horario: Number,
        disponivel: Boolean,
        cliente: String,
        formaPgto: String,
    }]
});