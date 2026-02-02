import { Expose } from "class-transformer";

export class ClienteResponseDto {
    @Expose()
    id: number;

    @Expose()
    nome: string;

    @Expose()
    telefone: number;

    @Expose()
    endereco: string;

    @Expose()
    created_at: Date;
}