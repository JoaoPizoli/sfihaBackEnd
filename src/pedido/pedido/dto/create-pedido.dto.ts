import { ArrayMinSize, IsArray, IsEnum, IsNumber, IsOptional, ValidateNested } from "class-validator";
import { PedidoStatusEnum } from "../enums/pedido-status.enum";
import { PedidoStatusPagamentoEnum } from "../enums/pedido-status-pagamento.enum";
import { CreatePedidoItemDto } from "src/pedido/pedido-item/dto/create-pedido-item.dto";
import { Type } from "class-transformer";
import { Column } from "typeorm";

export class CreatePedidoDto {
    @IsOptional()
    @IsNumber()
    cliente_id: number;

    @IsArray()
    @ArrayMinSize(1)
    @ValidateNested({ each: true })
    @Type(() => CreatePedidoItemDto)
    pedido_item: CreatePedidoItemDto[]
}