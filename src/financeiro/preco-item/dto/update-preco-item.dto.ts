import { PartialType } from "@nestjs/mapped-types";
import { CreatePrecoItemDto } from "./create-preco-item.dto";

export class UpdatePrecoItemDto extends PartialType(CreatePrecoItemDto) {}