import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    ParseIntPipe,
    HttpCode,
    HttpStatus,
} from "@nestjs/common";
import { LoteService } from "./lote.service";
import { plainToInstance } from "class-transformer";
import { LoteResponseDto } from "./dto/lote-response.dto";
import { CreateLoteDto } from "./dto/create-lote.dto";
import { UpdateLoteDto } from "./dto/update-lote.dto";

@Controller('lote')
export class LoteController {
    constructor(
        private readonly loteService: LoteService
    ) {}

    @Get()
    async findAll(): Promise<LoteResponseDto[]> {
        const lotes = await this.loteService.findAll();
        return plainToInstance(LoteResponseDto, lotes, { excludeExtraneousValues: true });
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<LoteResponseDto> {
        const lote = await this.loteService.findOne(id);
        return plainToInstance(LoteResponseDto, lote, { excludeExtraneousValues: true });
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() dadosLote: CreateLoteDto): Promise<LoteResponseDto> {
        const lote = await this.loteService.create(dadosLote);
        return plainToInstance(LoteResponseDto, lote, { excludeExtraneousValues: true });
    }

    @Patch(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dadosLote: UpdateLoteDto): Promise<LoteResponseDto> {
        const lote = await this.loteService.update(id, dadosLote);
        return plainToInstance(LoteResponseDto, lote, { excludeExtraneousValues: true });
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
        await this.loteService.delete(id);
    }
}