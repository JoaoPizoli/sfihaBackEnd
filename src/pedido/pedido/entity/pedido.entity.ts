import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { PedidoItemEntity } from 'src/pedido/pedido-item/entity/pedido_item.entity';
import { ClienteEntity } from 'src/cliente/entity/cliente.entity';
import { PedidoStatusEnum } from '../enums/pedido-status.enum';
import { PedidoStatusPagamentoEnum } from '../enums/pedido-status-pagamento.enum';

@Entity({ name: 'pedido' })
export class PedidoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => ClienteEntity, (cliente) => cliente.pedidos, { onDelete: 'RESTRICT'})
  @JoinColumn({ name: 'cliente_id'})
  cliente: ClienteEntity;

  @Column()
  cliente_id: number;

  @OneToMany(() => PedidoItemEntity, (pedidoItem) => pedidoItem.pedido)
  pedido_item: PedidoItemEntity[];

  @Column({
    type: 'enum',
    enum: PedidoStatusEnum,
    default: PedidoStatusEnum.ACEITO
  })
  status: PedidoStatusEnum;

  @Column()
  valor_total: number;

  @Column({
    type: 'enum',
    enum: PedidoStatusPagamentoEnum,
    default: PedidoStatusPagamentoEnum.PENDENTE
  })
  status_pagamento: PedidoStatusPagamentoEnum;

  @CreateDateColumn({ type: 'timestamp' })
  criado_em: Date;
}
