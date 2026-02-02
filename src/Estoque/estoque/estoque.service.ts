import { Injectable } from '@nestjs/common';
import { EstoqueEntity } from './entity/estoque.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';


@Injectable()
export default class EstoqueService {
    constructor(
        @InjectRepository(EstoqueEntity)
        private estoqueRepository: Repository<EstoqueEntity>
    ) {}

    findAll(): Promise<EstoqueEntity[]>{
        return this.estoqueRepository.find()
    }

    findOne(id: number): Promise<EstoqueEntity | null>{
        return this.estoqueRepository.findOneBy({ id: id })
    }

    async create(dadosEstoque: CreateEstoqueDto): Promise<EstoqueEntity | null>{
        const estoque = this.estoqueRepository.create(dadosEstoque)
        return await this.estoqueRepository.save(estoque)
    }

    async update(id: number, dadosEstoque: UpdateEstoqueDto): Promise<EstoqueEntity | null>{
        await this.estoqueRepository.update(id, dadosEstoque)
        return this.findOne(id)
    }

    async delete(id: number): Promise<void>{
        await this.estoqueRepository.delete({ id: id })
    }
}
