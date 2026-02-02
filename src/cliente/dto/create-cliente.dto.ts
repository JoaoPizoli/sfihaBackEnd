import { IsNumber, IsString } from "class-validator";

export class CreateClienteDto {
    @IsString()
    nome: string;

    @IsNumber()
    telefone: number

    @IsString()
    endereco: string;
}