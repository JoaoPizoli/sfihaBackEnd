import { Injectable } from "@nestjs/common";
import { CreatePrecoItemDto } from "./dto/create-preco-item.dto";
import { UpdatePrecoItemDto } from "./dto/update-preco-item.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { PrecoItemEntity } from "./entities/precoItem.entity";
import { Repository } from "typeorm";
import { ItemService } from "src/item/item/item.service";


@Injectable()
export class PrecoItemService{
    constructor(
        @InjectRepository(PrecoItemEntity)
        private precoItemRepository: Repository<PrecoItemEntity>,
        private itemService: ItemService
    ){}

    async findAll(): Promise<PrecoItemEntity[]>{
        return await this.precoItemRepository.find()
    }

    async findOneByItemId(itemId: number): Promise<PrecoItemEntity | null>{
        return await this.precoItemRepository.findOneBy({item_id: itemId})
    }

    async findByItensId(itensId: Array<number>): Promise<PrecoItemEntity[]>{
        const preco = await this.precoItemRepository.createQueryBuilder('preco')
                                                    .where('preco.item_id IN  (:...ids)', { ids: itensId })
                                                    .distinctOn(['preco.item_id'])
                                                    .orderBy('preco.item_id', 'ASC')
                                                    .addOrderBy('preco.alterado_em', 'DESC')
                                                    .getMany()
        return preco
    }

    async create(dadosPrecoItem: CreatePrecoItemDto): Promise<PrecoItemEntity | null>{
        const validarItemId = await this.itemService.findOne(dadosPrecoItem.item_id)
        if(!validarItemId){
            return null // Tratar erro aqui!
        }
        const precoItem = this.precoItemRepository.create(dadosPrecoItem)
        return await this.precoItemRepository.save(precoItem)
    }

    async updateByItemId(itemId: number, dadosPrecoItem: UpdatePrecoItemDto): Promise<PrecoItemEntity | null>{
        await this.precoItemRepository.update(itemId,dadosPrecoItem)
        return this.findOneByItemId(itemId)
    }

    async deleteByItemId(itemId: number): Promise<void>{
        await this.precoItemRepository.delete({item_id: itemId})
    }
}