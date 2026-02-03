import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PedidoItemEntity } from "./entity/pedido_item.entity";
import { Repository } from "typeorm";
import { CreatePedidoItemDto } from "./dto/create-pedido-item.dto";
import { DataSource } from "typeorm/browser";
import { UpdatePedidoItemDto } from "./dto/update-pedido-item.dto";


@Injectable()
export class PedidoItemService{
    constructor(
        @InjectRepository(PedidoItemEntity)
        private pedidoItemRepository: Repository<PedidoItemEntity>,
        private dataSource: DataSource
    ) {}

    async getAll(id: number): Promise<PedidoItemEntity[] | null>{
        return await this.pedidoItemRepository.findBy({ id: id })
    }

    async getOne(id: number): Promise<PedidoItemEntity | null>{
        return await this.pedidoItemRepository.findOneBy({ id: id })
    }

    async getByItemId(itemId: number): Promise<PedidoItemEntity[] | null> {
        return await this.pedidoItemRepository.findBy({ item_id: itemId })
    }

    async getByPedidoId(pedidoId: string): Promise<PedidoItemEntity[]>{
        return await this.pedidoItemRepository.findBy({ pedido_id: pedidoId })
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

    async update(id: number, dadosPedidoItem: UpdatePedidoItemDto): Promise<PedidoItemEntity | null>{
        await this.pedidoItemRepository.update(id, dadosPedidoItem)
        return await this.getOne(id)
    }

    async delete(id: number): Promise<void>{
        await this.pedidoItemRepository.delete(id)
    }
}