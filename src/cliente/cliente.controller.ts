import { Body, Controller, Delete, Get, Param, Patch, Post, HttpCode, ParseIntPipe } from '@nestjs/common';
import ClienteService from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { plainToInstance } from 'class-transformer';
import { ClienteResponseDto } from './dto/cliente-response.dto';

@Controller('clientes')
export default class ClienteController {
    constructor(
        private readonly clienteService: ClienteService 
    ) {}

    @Get()
    findAll(){
        const cliente = this.clienteService.findAll()
        return plainToInstance(ClienteResponseDto, cliente)
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number){
        const cliente = this.clienteService.findOne(id)
        return plainToInstance(ClienteResponseDto, cliente)
    }

    @Post()
    async create(@Body() dadosCliente: CreateClienteDto){
        const cliente = await this.clienteService.create(dadosCliente)
        return plainToInstance(ClienteResponseDto, cliente)
    }

    @Patch(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dadosCliente: UpdateClienteDto){
        const cliente = await this.clienteService.update(id, dadosCliente)
        return plainToInstance(ClienteResponseDto ,cliente)
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id', ParseIntPipe) id: number){
        await this.clienteService.delete(id)
    }
}
