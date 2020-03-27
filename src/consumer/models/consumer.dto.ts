export class ConsumerDto {
    nome: string;
    idade: number;
    fotoPerfil: string;

    constructor(nome, idade, fotoPerfil){
        this.nome = nome;
        this.idade = idade;
        this.fotoPerfil = fotoPerfil;
    }
}