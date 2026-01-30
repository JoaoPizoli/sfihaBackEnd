import { IsNumber, IsPositive } from "class-validator";

export class CreatePrecoItemDto {
    
    @IsNumber()
    item_id: number;

    @IsNumber()
    @IsPositive()
    valor: number;

}