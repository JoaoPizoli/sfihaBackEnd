import { PartialType } from "@nestjs/mapped-types";
import { CreateItemDto } from "./create-item.dto";
import { IsBoolean } from "class-validator";

export class UpdateItemDto extends PartialType(CreateItemDto) {
    
    @IsBoolean()
    ativo: boolean
}