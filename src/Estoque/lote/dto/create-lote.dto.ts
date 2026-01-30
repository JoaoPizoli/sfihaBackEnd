import { IsDate, IsNumber } from "class-validator"


export class CreateLoteDto {
    @IsNumber()
    item_id: number;

    @IsDate()
    data_validade: Date
}