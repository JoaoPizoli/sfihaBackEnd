import { Injectable } from "@nestjs/common";
import { CreateLoteDto } from "./dto/create-lote.dto";
import { UpdateLoteDto } from "./dto/update-lote.dto";
import { LoteEntity } from "./entity/lote.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class LoteService {
    constructor(
        @InjectRepository(LoteEntity)
        private loteRepository: Repository<LoteEntity>
    ){}

    async findAll(): Promise<LoteEntity[]>{
        return await this.loteRepository.find()
    }

    async findOne(id: number): Promise<LoteEntity | null>{
        return await this.loteRepository.findOneBy({id: id})
    }

    async create(loteDados: CreateLoteDto): Promise<LoteEntity | null>{
        const lote = this.loteRepository.create(loteDados)
        return await this.loteRepository.save(lote)
    }

    async update(id: number, loteDados: UpdateLoteDto): Promise<LoteEntity | null>{
        await this.loteRepository.update(id, loteDados)
        return this.findOne(id)
    }

    async delete(id: number): Promise<void>{
        await this.loteRepository.delete({id: id})
    }
}