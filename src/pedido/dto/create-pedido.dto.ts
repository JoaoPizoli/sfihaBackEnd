import { isEnum, IsNumber, IsString } from "class-validator";
import { PedidoStatusEnum } from "../enums/pedido-status.enum";

export class CreatePedidoDto {

    @isEnum(PedidoStatusEnum)
    status: PedidoStatusEnum;

    @IsNumber()
    valorTotal: string;
}