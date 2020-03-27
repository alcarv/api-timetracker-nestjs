import { Injectable } from "@nestjs/common";

@Injectable()
export class ConsumerService {
    getProfile(): string {
        return 'retorna os dados do perfil!';
    }
}