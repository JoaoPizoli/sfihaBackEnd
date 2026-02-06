import { IsEnum } from "class-validator";
import { PedidoStatusPagamentoEnum } from "../enums/pedido-status-pagamento.enum";

export class UpdateStatusFinanceiroPedidoDto {
    @IsEnum(PedidoStatusPagamentoEnum)
    status_pagamento: PedidoStatusPagamentoEnum;
}