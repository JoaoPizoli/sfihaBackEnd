import { IsEnum, IsNumber, IsOptional } from "class-validator";
import { StatusEstoqueEnum } from "../enum/status-estoque.enum";

export class CreateEstoqueDto {
    
    @IsNumber()
    item_id: number;

    @IsNumber()
    @IsOptional()
    quantidade_atual: number;

    @IsEnum(StatusEstoqueEnum)
    @IsOptional()
    status: StatusEstoqueEnum


}