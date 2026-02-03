import { Expose } from "class-transformer";
import { TipoItemEnum } from "../enum/tipo-item.enum";
import { UnidadeMedidaItemEnum } from "../enum/unidadeMedida-item.enum";

export class ItemResponseDto {
    @Expose()
    id: number;

    @Expose()
    ativo: boolean;

    @Expose()
    unidade_medida: UnidadeMedidaItemEnum;

    @Expose()
    minimo_necessario: number;

    @Expose()
    aceitar_pedido: boolean;

    @Expose()
    tipo: TipoItemEnum;

    @Expose()
    controla_estoque: boolean;
}