import { Expose } from "class-transformer";
import { StatusEstoqueEnum } from "../enum/status-estoque.enum";

export class EstoqueResponseDto {
    @Expose()
    id: number;

    @Expose()
    item_id: number;

    @Expose()
    quantidade_atual: number;

    @Expose()
    status: StatusEstoqueEnum;

}