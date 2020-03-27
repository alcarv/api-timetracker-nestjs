import { Injectable } from "@nestjs/common";

@Injectable()
export class EstablishmentService {
    getAll(): string {
        return 'retorna todos os estabelecimentos!';
    }
}