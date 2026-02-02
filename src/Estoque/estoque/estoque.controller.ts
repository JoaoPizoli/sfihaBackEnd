import { Controller, ParseIntPipe, Get, Param, Post, Body, Patch, Delete, HttpCode } from "@nestjs/common";
import EstoqueService from "./estoque.service";
import { plainToInstance } from "class-transformer";
import { EstoqueResponseDto } from "./dto/estoque-response.dto";
import { CreateEstoqueDto } from "./dto/create-estoque.dto";
import { UpdateEstoqueDto } from "./dto/update-estoque.dto";


@Controller('estoque')
export default class EstoqueController{
    constructor(
        private readonly estoqueService: EstoqueService
    ) {}

    @Get()
    findAll(){
        const estoque = this.estoqueService.findAll()
        return plainToInstance(EstoqueResponseDto, estoque)
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number){
        const estoque = this.estoqueService.findOne(id)
        return plainToInstance(EstoqueResponseDto, estoque)
    }

    @Post()
    async create(@Body() dadosEstoque: CreateEstoqueDto){
        const estoque = await this.estoqueService.create(dadosEstoque)
        return plainToInstance(EstoqueResponseDto, estoque)
    }

    @Patch(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dadosEstoque: UpdateEstoqueDto){
        const estoque = await this.estoqueService.update(id, dadosEstoque)
        return plainToInstance(EstoqueResponseDto, estoque)
    }

    @Delete(':id')
    @HttpCode(204)
    async delte(@Param('id', ParseIntPipe) id: number){
        await this.estoqueService.delete(id)
    }
}