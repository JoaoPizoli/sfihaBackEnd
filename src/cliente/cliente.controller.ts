import { 
    Body, 
    Controller, 
    Delete, 
    Get, 
    Param, 
    Patch, 
    Post, 
    HttpCode,
    HttpStatus,
    ParseIntPipe 
} from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { plainToInstance } from 'class-transformer';
import { ClienteResponseDto } from './dto/cliente-response.dto';

@Controller('clientes')
export class ClienteController {
    constructor(
        private readonly clienteService: ClienteService 
    ) {}

    @Get()
    async findAll(): Promise<ClienteResponseDto[]> {
        const clientes = await this.clienteService.findAll();
        return plainToInstance(ClienteResponseDto, clientes, {
            excludeExtraneousValues: true,
        });
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<ClienteResponseDto> {
        const cliente = await this.clienteService.findOne(id);
        return plainToInstance(ClienteResponseDto, cliente, {
            excludeExtraneousValues: true,
        });
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() dadosCliente: CreateClienteDto): Promise<ClienteResponseDto> {
        const cliente = await this.clienteService.create(dadosCliente);
        return plainToInstance(ClienteResponseDto, cliente, {
            excludeExtraneousValues: true,
        });
    }

    @Patch(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dadosCliente: UpdateClienteDto): Promise<ClienteResponseDto> {
        const cliente = await this.clienteService.update(id, dadosCliente);
        return plainToInstance(ClienteResponseDto, cliente, {
            excludeExtraneousValues: true,
        });
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
        await this.clienteService.delete(id);
    }
}