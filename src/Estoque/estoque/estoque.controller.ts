import { Controller, ParseIntPipe, Get, Param, Post, Body, Patch, Delete, HttpCode } from "@nestjs/common";
import { EstoqueService } from "./estoque.service";
import { plainToInstance } from "class-transformer";
import { EstoqueResponseDto } from "./dto/estoque-response.dto";
import { CreateEstoqueDto } from "./dto/create-estoque.dto";
import { UpdateEstoqueDto } from "./dto/update-estoque.dto";


@Controller('estoque')
export class EstoqueController{
    constructor(
        private readonly estoqueService: EstoqueService
    ) {}

    @Get()
    async findAll(){
        const estoque = await this.estoqueService.findAll()
        return plainToInstance(EstoqueResponseDto, estoque, { excludeExtraneousValues : true})
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number){
        const estoque = await this.estoqueService.findOne(id)
        return plainToInstance(EstoqueResponseDto, estoque, { excludeExtraneousValues: true})
    }

    @Post()
    async create(@Body() dadosEstoque: CreateEstoqueDto){
        const estoque = await this.estoqueService.create(dadosEstoque)
        return plainToInstance(EstoqueResponseDto, estoque, { excludeExtraneousValues: true})
    }

    @Patch(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dadosEstoque: UpdateEstoqueDto){
        const estoque = await this.estoqueService.update(id, dadosEstoque)
        return plainToInstance(EstoqueResponseDto, estoque, { excludeExtraneousValues: true })
    }

    @Delete(':id')
    @HttpCode(204)
    async delte(@Param('id', ParseIntPipe) id: number){
        await this.estoqueService.delete(id)
    }
}