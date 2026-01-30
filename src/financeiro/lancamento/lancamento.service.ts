import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { LancamentoFinanceiroEntity } from "./entity/lancamentoFinanceiro.entity";
import { Repository } from "typeorm";
import { CreateLancamentoDto } from "./dto/create-lancamento.dto";
import { UpdateLancamentoDto } from "./dto/update-lancamento.dto";

@Injectable()
export default class LancamentoService{
    constructor(
        @InjectRepository(LancamentoFinanceiroEntity)
        private lancamentoRepository: Repository<LancamentoFinanceiroEntity>
    ){}

    findAll(): Promise<LancamentoFinanceiroEntity[]>{
        return this.lancamentoRepository.find()
    }

    findOne(id: number): Promise<LancamentoFinanceiroEntity | null>{
        return this.lancamentoRepository.findOneBy({id: id})
    }

    async create(dadosLancamento: CreateLancamentoDto): Promise<LancamentoFinanceiroEntity | null>{
        const lancamento = this.lancamentoRepository.create(dadosLancamento)
        return await this.lancamentoRepository.save(lancamento)
    }

    async update(id: number, dadosLancamento: UpdateLancamentoDto): Promise<LancamentoFinanceiroEntity | null>{
        await this.lancamentoRepository.update(id, dadosLancamento)
        return this.findOne(id)
    }

    async delete(id: number): Promise<void>{
        await this.lancamentoRepository.delete({id: id})
    }
}