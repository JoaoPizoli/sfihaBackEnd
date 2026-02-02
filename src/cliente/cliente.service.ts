import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClienteEntity } from './entity/cliente.entity';
import { Repository } from 'typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export default class ClienteService {
    constructor(
        @InjectRepository(ClienteEntity)
        private clienteRepository: Repository<ClienteEntity> 
    ) {}

    findAll(): Promise<ClienteEntity[]>{
        return this.clienteRepository.find()
    }

    findOne(id: number): Promise<ClienteEntity | null>{
        return this.clienteRepository.findOneBy({id: id})
    }

    async create(dadosClientes: CreateClienteDto): Promise<ClienteEntity | null>{
        const cliente = this.clienteRepository.create(dadosClientes)
        return await this.clienteRepository.save(cliente)
    }

    async update(id: number, dadosClientes: UpdateClienteDto): Promise<ClienteEntity | null>{
        await this.clienteRepository.update(id, dadosClientes)
        return this.findOne(id)
    }

    async delete(id: number): Promise<void>{
        await this.clienteRepository.delete({id: id})
    }
}
