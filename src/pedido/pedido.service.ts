import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PedidoEntity } from './entities/pedido.entity';
import { PedidoItemEntity } from './entities/pedido_item.entity';
import { Repository } from 'typeorm';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';


@Injectable()
export default class PedidoService {
    constructor(
        @InjectRepository(PedidoEntity)
        private pedidoRepository: Repository<PedidoEntity>
    ){}

    findAll(): Promise<PedidoEntity[]>{
        return this.pedidoRepository.find();
    }

    findOne(id: string): Promise<PedidoEntity | null>{
        return this.pedidoRepository.findOneBy({id: id})
    }

    async create(pedidoData: CreatePedidoDto): Promise<PedidoEntity>{
        const pedido = this.pedidoRepository.create(pedidoData)
        return await this.pedidoRepository.save(pedido)
    }

    async update(id: string, pedidoData: UpdatePedidoDto): Promise<PedidoEntity | null>{
        await this.pedidoRepository.update(id, pedidoData)
        return this.findOne(id)
    }

    async delete(id: string): Promise<void>{
        await this.pedidoRepository.delete({id: id})
    }   

}
