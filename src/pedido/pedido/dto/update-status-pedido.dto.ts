import { IsEnum } from "class-validator";
import { PedidoStatusEnum } from "../enums/pedido-status.enum";

export class UpdateStatusPedidoDto {
    @IsEnum(PedidoStatusEnum)
    status: PedidoStatusEnum;
}