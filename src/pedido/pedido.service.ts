import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PedidoEntity } from './entities/pedido.entity';
import { PedidoItemEntity } from './entities/pedido_item.entity';
import { Repository } from 'typeorm';

@Injectable()
export default class PedidoService {
    constructor(
        @InjectRepository(PedidoEntity)
        private pedidoRepository: Repository<PedidoEntity>
    ){}
    
}
