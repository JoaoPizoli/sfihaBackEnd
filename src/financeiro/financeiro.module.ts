import { Module } from '@nestjs/common';
import FinanceiroService from './financeiro.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LancamentoFinanceiroEntity } from './lancamento/entity/lancamentoFinanceiro.entity';
import { PrecoItemEntity } from './preco-item/entities/precoItem.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LancamentoFinanceiroEntity, PrecoItemEntity])],
  controllers: [],
  providers: [FinanceiroService],
})
export default class FinanceiroModule {}
