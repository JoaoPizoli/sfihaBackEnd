import { IsBoolean, IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { TipoItemEnum } from "../enum/tipo-item.enum";
import { UnidadeMedidaItemEnum } from "../enum/unidadeMedida-item.enum";

export class CreateItemDto {

    @IsString()
    nome: string;

    @IsBoolean()
    @IsOptional()
    ativo: boolean;

    @IsEnum(UnidadeMedidaItemEnum)
    unidade_medida: UnidadeMedidaItemEnum;

    @IsNumber()
    @IsOptional()
    minimo_necessario: number;

    @IsBoolean()
    @IsOptional()
    aceitar_pedido: boolean;

    @IsEnum(TipoItemEnum)
    tipo: TipoItemEnum;

    @IsBoolean()
    controla_estoque: boolean;

}