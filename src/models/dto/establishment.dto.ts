export class EstablishmentDto {
    nome: String;
    email: String;
    pswd: String;
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
        dia: Date;
        horario: Number;
        disponivel: Boolean;
        cliente: String;
        formaPgto: String;
    }]
}