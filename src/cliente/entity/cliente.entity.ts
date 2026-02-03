import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PedidoEntity } from 'src/pedido/pedido/entity/pedido.entity';

@Entity({ name: 'cliente' })
export class ClienteEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @OneToMany(() => PedidoEntity, (pedido) => pedido.cliente)
  pedidos: PedidoEntity[]

  @Column()
  telefone: number;

  @Column()
  endereco: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
