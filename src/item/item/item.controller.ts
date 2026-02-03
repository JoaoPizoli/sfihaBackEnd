import { Body, Delete, Get, Param, Patch, Post, ParseIntPipe, Controller, HttpCode, HttpStatus } from "@nestjs/common";
import { ItemService } from "./item.service";
import { CreateItemDto } from "./dto/create-item.dto";
import { UpdateItemDto } from "./dto/update-item.dto";
import { ItemResponseDto } from "./dto/item-response.dto";
import { plainToInstance } from "class-transformer";


@Controller('item')
export class ItemController {
    constructor(
        private readonly itemService: ItemService
    ) {}

    @Get()
    async findAll(): Promise<ItemResponseDto[]>{
        const itens = await this.itemService.findAll()
        return plainToInstance(ItemResponseDto, itens, { excludeExtraneousValues: true })
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<ItemResponseDto>{
        const item = await this.itemService.findOne(id)
        return plainToInstance(ItemResponseDto, item, { excludeExtraneousValues: true })
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() dadosItem: CreateItemDto): Promise<ItemResponseDto>{
        const item = await this.itemService.create(dadosItem)
        return plainToInstance(ItemResponseDto, item, { excludeExtraneousValues: true })
    }

    @Patch(':id')
    async update(@Param('id', ParseIntPipe) id: number,@Body() dadosItem: UpdateItemDto): Promise<ItemResponseDto>{
        const item = await this.itemService.update(id,dadosItem)
        return plainToInstance(ItemResponseDto, item, { excludeExtraneousValues: true })
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NOT_FOUND)
    async delete(@Param('id', ParseIntPipe) id: number){
        await this.itemService.delte(id)
    }
}