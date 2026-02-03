import { Expose } from "class-transformer";

export class PrecoItemResponseDto {
    @Expose()
    id: number;

    @Expose()
    item_id: number;

    @Expose()
    valor: number;

    @Expose()
    alterado_em: Date;
}