import { LancamentoReferenciaTipoEnum } from "../enum/lancamento-referencia-tipo.enum";
import { LancamentoCategoriaEnum } from "../enum/lancamento-categoria.enum";
import { LancamentoTipoEnum } from "../enum/lancamento-tipo.enum";
import { IsEnum, IsNumber, IsOptional } from "class-validator";


export class CreateLancamentoDto {

    @IsEnum(LancamentoTipoEnum)
    tipo: LancamentoTipoEnum

    @IsNumber()
    valor: number;

    @IsEnum(LancamentoCategoriaEnum)
    categoria: LancamentoCategoriaEnum;

    @IsEnum(LancamentoReferenciaTipoEnum)
    referencia_tipo: LancamentoReferenciaTipoEnum;

    @IsNumber()
    @IsOptional()
    referencia_id: number;
}