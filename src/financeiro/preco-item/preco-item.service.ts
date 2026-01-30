import { Injectable } from "@nestjs/common";
import { CreatePrecoItemDto } from "./dto/create-preco-item.dto";
import { UpdatePrecoItemDto } from "./dto/update-preco-item.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { PrecoItemEntity } from "./entities/precoItem.entity";
import { Repository } from "typeorm";


@Injectable()
export default class PrecoItemService{
    constructor(
        @InjectRepository(PrecoItemEntity)
        private precoItemRepository: Repository<PrecoItemEntity>
    ){}

    findAll(): Promise<PrecoItemEntity[]>{
        return this.precoItemRepository.find()
    }

    findOne(id: number): Promise<PrecoItemEntity | null>{
        return this.precoItemRepository.findOneBy({id: id})
    }

    async create(dadosPrecoItem: CreatePrecoItemDto): Promise<PrecoItemEntity | null>{
        const precoItem = this.precoItemRepository.create(dadosPrecoItem)
        return await this.precoItemRepository.save(precoItem)
    }

    async update(id: number, dadosPrecoItem: UpdatePrecoItemDto): Promise<PrecoItemEntity | null>{
        await this.precoItemRepository.update(id,dadosPrecoItem)
        return this.findOne(id)
    }

    async delete(id: number): Promise<void>{
        await this.precoItemRepository.delete({id: id})
    }
}