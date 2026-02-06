import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PedidoEntity } from './entity/pedido.entity';
import { Repository } from 'typeorm';
import { PedidoItemService } from '../pedido-item/pedido-item.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { PrecoItemService } from 'src/financeiro/preco-item/preco-item.service';
import { PedidoStatusEnum } from './enums/pedido-status.enum';
import { PedidoStatusPagamentoEnum } from './enums/pedido-status-pagamento.enum';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { UpdateStatusPedidoDto } from './dto/update-status-pedido.dto';
import { UpdateStatusFinanceiroPedidoDto } from './dto/update-status-financeiro-pedido.dto';
import { CreatePedidoItemDto } from '../pedido-item/dto/create-pedido-item.dto';


@Injectable()
export class PedidoService {
    constructor(
        @InjectRepository(PedidoEntity)
        private pedidoRepository: Repository<PedidoEntity>,
        private pedidoItemService: PedidoItemService,
        private precoItemService: PrecoItemService
    ) {}

    
    //Cria o Pedido com os Itens
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

    async addItemOnPedido(id: string, dadosPedidoItem: CreatePedidoItemDto[]){
        const
    }

    async findOne(id: string): Promise<PedidoEntity | null>{
        return await this.pedidoRepository.findOneBy({ id: id })
    }

    //Lista o Pedido com os Itens
    async findOneWithItens(id: string): Promise<PedidoEntity | null> {
        return await this.pedidoRepository.findOne({
            where: { id: id },
            relations: { pedido_item: true }
        })
    }

    //Faz o update do valorTotal
    async updateValorTotal(id: string, valorTotal: number){
        await this.pedidoRepository.update(id, { valor_total: valorTotal })
        return await this.findOne(id)
    }

    // Update do Status do Pedido
    async updateStatusPedido(id: string, novoStatus: UpdateStatusPedidoDto): Promise<PedidoEntity | null>{
        await this.pedidoRepository.update(id, { status: novoStatus.status})
        return await this.findOne(id)
    }

    //Update da situação financeira do Pedido
    async updateStatusFinanceiroPedido(id: string, novoStatus: UpdateStatusFinanceiroPedidoDto): Promise<PedidoEntity | null>{
        await this.pedidoRepository.update(id, { status_pagamento: novoStatus.status_pagamento })
        return await this.findOne(id)
    }

    async updateItem(id: string, pedidoItem: CreatePedidoItemDto[]): Promise<PedidoEntity | null> {

    }

    //Deleta o pedido e consequentemento todos os itens dele
    async delete(id: string): Promise<void>{
        await this.pedidoRepository.delete({id: id})
    }


}
