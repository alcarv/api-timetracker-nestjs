import * as mongoose from 'mongoose';
import { ValoresDto } from './valores.dto';
import { ConfiguracoesDto } from './configuracoes.dto';
import { HorariosDto } from './horarios.dto';

export const EstablishmentSchema = new mongoose.Schema({
    nome: String,
    arrTipo: [String],
    endereço: String,
    nrDocumento: String,
    descricao: String,
    // valores: [ValoresDto],
    // configuracoes: ConfiguracoesDto,
    // horarios: [HorariosDto]
});