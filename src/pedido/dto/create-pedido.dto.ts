import { IsEnum, IsNumber } from "class-validator";
import { PedidoStatusEnum } from "../enums/pedido-status.enum";
import { PedidoStatusPagamentoEnum } from "../enums/pedido-status-pagamento.enum";

export class CreatePedidoDto {

    @IsEnum(PedidoStatusEnum)
    status: PedidoStatusEnum;

    @IsNumber()
    valorTotal: string;

    @IsEnum(PedidoStatusPagamentoEnum)
    status_pagamento: PedidoStatusPagamentoEnum;

    
}