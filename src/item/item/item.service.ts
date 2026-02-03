import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ItemEntity } from "./entity/item.entity";
import { Repository } from "typeorm";
import { CreateItemDto } from "./dto/create-item.dto";
import { UpdateItemDto } from "./dto/update-item.dto";


@Injectable()
export class ItemService {
    constructor(
        @InjectRepository(ItemEntity)
        private itemRepository: Repository<ItemEntity>
    ) {}

    async findAll(): Promise<ItemEntity[]>{
        return await this.itemRepository.find()
    }

    async findOne(id: number): Promise<ItemEntity | null>{
        return await this.itemRepository.findOneBy({ id: id })
    }

    async create(dadosItem: CreateItemDto): Promise<ItemEntity | null>{
        const item = this.itemRepository.create(dadosItem)
        return await this.itemRepository.save(item)
    }

    async update(id: number, dadosItem: UpdateItemDto): Promise<ItemEntity | null>{
        await this.itemRepository.update(id, dadosItem)
        return await this.findOne(id)
    }

    async delte(id: number): Promise<void>{
        await this.itemRepository.delete(id)
    }
}