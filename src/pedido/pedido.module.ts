import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoEntity } from './entities/pedido.entity';
import { PedidoItemEntity } from './entities/pedido_item.entity';
import PedidoController from './pedido.controller';
import PedidoService from './pedido.service';

@Module({
  imports: [TypeOrmModule.forFeature([PedidoEntity, PedidoItemEntity])],
  controllers: [PedidoController],
  providers: [PedidoService],
})
export default class PedidoModule {}
