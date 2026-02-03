import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoteEntity } from './lote/entity/lote.entity';
import { EstoqueEntity } from './estoque/entity/estoque.entity';
import { EstoqueService } from './estoque/estoque.service';
import { EstoqueController }  from './estoque/estoque.controller';
import { LoteService } from './lote/lote.service';
import { LoteController } from './lote/lote.controller';


@Module({
  imports: [TypeOrmModule.forFeature([LoteEntity, EstoqueEntity])],
  controllers: [EstoqueController, LoteController],
  providers: [EstoqueService, LoteService],
})
export default class EstoqueModule {}
