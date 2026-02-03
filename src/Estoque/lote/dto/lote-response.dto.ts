import { Expose } from "class-transformer";

export class LoteResponseDto {
    @Expose()
    id: number;

    @Expose()
    estoque_id: number

    @Expose()
    data_validade: Date;

    @Expose()
    created_at: Date;
}