import { IsBoolean, IsNumber, IsString } from "class-validator";


export class CreateItemDto {

    @IsString()
    nome: string;

    @IsString()
    unidade_medida: string;

    @IsNumber()
    minimo_necessario: number;

    @IsBoolean()
    aceitar_pedido: boolean;

    @IsBoolean()
    vende: boolean;

    @IsBoolean()
    controla_estoque: boolean;

}