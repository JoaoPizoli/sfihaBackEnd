import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PedidoEntity } from './entity/pedido.entity';
import { Repository } from 'typeorm';
import { PedidoItemService } from '../pedido-item/pedido-item.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { PrecoItemService } from 'src/financeiro/preco-item/preco-item.service';
import { PedidoStatusEnum } from './enums/pedido-status.enum';
import { PedidoStatusPagamentoEnum } from './enums/pedido-status-pagamento.enum';



@Injectable()
export default class PedidoService {
    constructor(
        @InjectRepository(PedidoEntity)
        private pedidoRepository: Repository<PedidoEntity>,
        private pedidoItemService: PedidoItemService,
        private precoItemService: PrecoItemService
    ) {}

    async create(dadosPedido: CreatePedidoDto): Promise<PedidoEntity | null> {
        const itensId = dadosPedido.pedido_item.map( i => i.item_id)
        const precos = await this.precoItemService.findByItensId(itensId)

        let soma_total = 0 

        for(let i = 0; i < precos.length; i++){
            const preco = precos.map( p => p.valor)
            preco[i] + soma_total
        }

        const pedido = this.pedidoRepository.create({
            cliente_id: dadosPedido.cliente_id,
            valor_total: soma_total,
            status: PedidoStatusEnum.ACEITO,
            status_pagamento: PedidoStatusPagamentoEnum.PENDENTE
        })
        
        await this.pedidoRepository.save(pedido)

        await this.pedidoItemService.createMany(pedido.id, dadosPedido.pedido_item)

        return pedido
    }

}
