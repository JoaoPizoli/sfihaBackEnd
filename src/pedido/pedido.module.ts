import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoEntity } from './pedido/entity/pedido.entity';
import { PedidoItemEntity } from './pedido-item/entity/pedido_item.entity';


@Module({
  imports: [TypeOrmModule.forFeature([PedidoEntity, PedidoItemEntity])],
  controllers: [],
  providers: [],
})
export default class PedidoModule {}
