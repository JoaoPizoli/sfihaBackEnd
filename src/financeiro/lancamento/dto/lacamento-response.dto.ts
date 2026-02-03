import { Expose } from "class-transformer";
import { LancamentoTipoEnum } from "../enum/lancamento-tipo.enum";
import { LancamentoCategoriaEnum } from "../enum/lancamento-categoria.enum";
import { LancamentoReferenciaTipoEnum } from "../enum/lancamento-referencia-tipo.enum";

export class LancamentoResponseDto {
    @Expose()
    id: number;

    @Expose()
    tipo: LancamentoTipoEnum;

    @Expose()
    valor: number;

    @Expose()
    categoria: LancamentoCategoriaEnum;

    @Expose()
    created_At: Date;

    @Expose()
    referencia_tipo: LancamentoReferenciaTipoEnum

    @Expose()
    referencia_id: LancamentoReferenciaTipoEnum
}