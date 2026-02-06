import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PedidoItemEntity } from "./entity/pedido_item.entity";
import { Repository } from "typeorm";
import { CreatePedidoItemDto } from "./dto/create-pedido-item.dto";
import { DataSource } from "typeorm/browser";
import { UpdatePedidoItemDto } from "./dto/update-pedido-item.dto";
import { PrecoItemService } from "src/financeiro/preco-item/preco-item.service";

@Injectable()
export class PedidoItemService{
    constructor(
        @InjectRepository(PedidoItemEntity)
        private pedidoItemRepository: Repository<PedidoItemEntity>,
        private precoItemService: PrecoItemService,
        private dataSource: DataSource
    ) {}

    async findAll(pedidoId: string): Promise<PedidoItemEntity[] | null>{
        return await this.pedidoItemRepository.findBy({ pedido_id: pedidoId })
    }

    async findOne(id: number): Promise<PedidoItemEntity | null>{
        return await this.pedidoItemRepository.findOneBy({ id: id })
    }

    // Utilizar para consultas para ver todos Pedidos regitrados de um Item
    async findByItemId(itemId: number): Promise<PedidoItemEntity[] | null> {
        return await this.pedidoItemRepository.findBy({ item_id: itemId })
    }

    async somaValorItens(pedidoId: string){
        const itens = await this.pedidoItemRepository.findBy({ pedido_id: pedidoId })
        const quantia = itens.map( q => q.quantidade )
        const itensId = itens.map( i => i.item_id )
        const valores = await this.precoItemService.findByItensId(itensId)

        let valor_total = 0

        for(let i = 0; i < itensId.length; i++){
            valor_total = valores[i] * quantia[i]
        }
    }

    
    async createMany(pedidoId: string, dadosPedidoItem: CreatePedidoItemDto[]): Promise<PedidoItemEntity[]>{
        return this.dataSource.transaction(async (manager) => {
            const repo = manager.getRepository(PedidoItemEntity)
            const payload = dadosPedidoItem.map((dto) => ({
                ...dto,
                pedido_id: pedidoId
            }))

            const entidades = repo.create(payload)
            return repo.save(entidades)
        })
    }


    async addItemPedido(pedidoId: string, dadosPedidoItem: CreatePedidoItemDto[]): Promise<PedidoItemEntity[] | null>{
        const payload = dadosPedidoItem.map((dto) => ({
            ...dto,
            pedido_id: pedidoId
        }))
        const itemPedido = this.pedidoItemRepository.create(payload)
        await this.pedidoItemRepository.save(itemPedido)
        return this.findAll(pedidoId)
    }

    //Faz o Update de um Item do pedido, pelo id dele
    async updateItem(id: number, dadosPedidoItem: UpdatePedidoItemDto): Promise<PedidoItemEntity | null>{
        await this.pedidoItemRepository.update(id, dadosPedidoItem)
        return await this.findOne(id)
    }

    //Remove um Item do Pedido pelo Id do Item
    async deleteOneById(id: number): Promise<void>{
        await this.pedidoItemRepository.delete(id)
    }

    async deleteAllByPedidoId(pedidoId: string): Promise<void>{
        await this.pedidoItemRepository.delete({ pedido_id: pedidoId })
    }
}