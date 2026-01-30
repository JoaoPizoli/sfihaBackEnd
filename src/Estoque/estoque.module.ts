import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoteEntity } from './lote/entity/lote.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LoteEntity])],
  controllers: [],
  providers: [],
})
export default class EstoqueModule {}
