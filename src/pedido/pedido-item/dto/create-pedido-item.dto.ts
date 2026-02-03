import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePedidoItemDto {
    @IsNumber()
    item_id: number;

    @IsNumber()
    quantidade: number;

    @IsOptional()
    @IsString()
    observacao: string;
}