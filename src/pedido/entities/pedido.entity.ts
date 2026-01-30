import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { PedidoStatusEnum } from '../enums/pedido-status.enum';
import { PedidoStatusPagamentoEnum } from '../enums/pedido-status-pagamento.enum';

@Entity({ name: 'pedido' })
export class PedidoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  cliente_id: number; //FK de Cliente

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
