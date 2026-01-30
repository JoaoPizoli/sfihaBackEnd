import { Injectable } from "@nestjs/common";
import { CreateLoteDto } from "./dto/create-lote.dto";
import { UpdateLoteDto } from "./dto/update-lote.dto";
import { LoteEntity } from "./entity/lote.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export default class LoteService {
    constructor(
        @InjectRepository(LoteEntity)
        private loteRepository: Repository<LoteEntity>
    ){}

    findAll(): Promise<LoteEntity[]>{
        return this.loteRepository.find()
    }

    findOne(id: number): Promise<LoteEntity | null>{
        return this.loteRepository.findOneBy({id: id})
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