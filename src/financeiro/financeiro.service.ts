import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LancamentoFinanceiroEntity } from './lancamento/entity/lancamentoFinanceiro.entity';
import { PrecoItemEntity } from './preco-item/entities/precoItem.entity';


@Injectable()
export default class FinanceiroService {
}
