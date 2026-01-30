import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemEntity } from './entities/item.entity';
import { Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export default class ItemService {
    constructor(
        @InjectRepository(ItemEntity)
        private itemRepository: Repository<ItemEntity>
    ){}

    findAll(): Promise<ItemEntity[]>{
        return this.itemRepository.find()
    }

    findOne(id: number): Promise<ItemEntity | null>{
        return this.itemRepository.findOneBy({id});
    }

    async create(dadosItem: CreateItemDto): Promise<ItemEntity | null>{
        const item = this.itemRepository.create(dadosItem)
        return await this.itemRepository.save(item)
    }

    async update(id: number, dadosItem: UpdateItemDto): Promise<ItemEntity | null>{
        await this.itemRepository.update(id, dadosItem)
        return this.findOne(id)
    }

    async delete(id: number): Promise<void>{
        await this.itemRepository.delete(id);
    }
}
