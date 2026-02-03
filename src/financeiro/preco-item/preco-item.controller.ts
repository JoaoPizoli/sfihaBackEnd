import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, ParseIntPipe } from "@nestjs/common";
import { PrecoItemService } from "./preco-item.service";
import { CreatePrecoItemDto } from "./dto/create-preco-item.dto";
import { UpdatePrecoItemDto } from "./dto/update-preco-item.dto";
import { PrecoItemResponseDto } from "./dto/preco-item-response.dto";
import { plainToInstance } from "class-transformer";

@Controller()
export class PrecoItemController {
    constructor(
        private readonly precoItemService: PrecoItemService
    ){}

    @Get()
    async findAll(): Promise<PrecoItemResponseDto[]>{
        const precoItem = await this.precoItemService.findAll()
        return plainToInstance(PrecoItemResponseDto, precoItem, { excludeExtraneousValues: true })
    }

    @Get(':itemId')
    async findOneByItemId(@Param('itemId', ParseIntPipe) itemId: number): Promise<PrecoItemResponseDto>{
        const precoItem = await this.precoItemService.findOneByItemId(itemId)
        return plainToInstance(PrecoItemResponseDto, precoItem, { excludeExtraneousValues: true })
    }

    @Post('buscar-multiplos') 
    async findByItensId(@Body() body: { itensIds: number[] }) {
        const precosItens = await this.precoItemService.findByItensId(body.itensIds)
        return plainToInstance(PrecoItemResponseDto, precosItens, { excludeExtraneousValues: true })
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() dadosPrecoItem: CreatePrecoItemDto): Promise<PrecoItemResponseDto>{
        const precoItem = await this.precoItemService.create(dadosPrecoItem)
        return plainToInstance( PrecoItemResponseDto, precoItem, { excludeExtraneousValues: true })
    }

    @Patch(':itemId')
    async updateByItemId(@Param('itemId', ParseIntPipe) itemId: number, @Body() dadosPrecoItem: UpdatePrecoItemDto): Promise<PrecoItemResponseDto>{
        const precoItem = await this.precoItemService.updateByItemId(itemId, dadosPrecoItem)
        return plainToInstance(PrecoItemResponseDto, precoItem, { excludeExtraneousValues: true })
    }

    @Delete(':itemId')
    @HttpCode(HttpStatus.NO_CONTENT)
    async deleteByItemId(@Param('itemId', ParseIntPipe) itemId: number) {
        await this.precoItemService.deleteByItemId(itemId)
    }
}