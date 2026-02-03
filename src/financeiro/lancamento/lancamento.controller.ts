import { Body, Controller, Get, HttpCode, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { LancamentoService } from "./lancamento.service";
import { plainToInstance } from "class-transformer";
import { CreateLancamentoDto } from "./dto/create-lancamento.dto";
import { UpdateLancamentoDto } from "./dto/update-lancamento.dto";
import { LancamentoResponseDto } from "./dto/lacamento-response.dto";

@Controller()
export class LancamentoController {
    constructor(
        private readonly lancamentoService: LancamentoService
    ) {}

    @Get()
    async findAll(): Promise<LancamentoResponseDto[]>{
        const lancamento = await this.lancamentoService.findAll()
        return plainToInstance(LancamentoResponseDto, lancamento, { excludeExtraneousValues: true })
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<LancamentoResponseDto>{
        const lancamento = await this.lancamentoService.findOne(id)
        return plainToInstance(LancamentoResponseDto, lancamento, { excludeExtraneousValues: true })
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() dadosLancamento: CreateLancamentoDto): Promise<LancamentoResponseDto>{
        const lancamento = await this.lancamentoService.create(dadosLancamento)
        return plainToInstance(LancamentoResponseDto, lancamento, { excludeExtraneousValues: true })
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() dadosLancamento: UpdateLancamentoDto): Promise<LancamentoResponseDto>{
        const lancamento = await this.lancamentoService.update(id, dadosLancamento)
        return plainToInstance(LancamentoResponseDto, lancamento, { excludeExtraneousValues: true })
    }

    @Patch(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') id: number){
        await this.lancamentoService.delete(id)
    }
}