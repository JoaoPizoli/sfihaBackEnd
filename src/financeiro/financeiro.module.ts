import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LancamentoFinanceiroEntity } from './lancamento/entity/lancamentoFinanceiro.entity';
import { PrecoItemEntity } from './preco-item/entities/precoItem.entity';
import LancamentoController from './lancamento/lancamento.controller';
import LancamentoService from './lancamento/lancamento.service';
import PrecoItemController from './preco-item/preco-item.controller';
import PrecoItemService from './preco-item/preco-item.service';


@Module({
  imports: [TypeOrmModule.forFeature([LancamentoFinanceiroEntity, PrecoItemEntity])],
  controllers: [PrecoItemController, LancamentoController],
  providers: [LancamentoService, PrecoItemService],
})
export default class FinanceiroModule {}
