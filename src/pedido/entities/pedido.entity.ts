import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'pedido' })
export class PedidoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  cliente_id: number; //FK de Cliente

  @Column()
  status: string;

  @Column()
  valor_total: number;

  @CreateDateColumn({ type: 'timestamp' })
  criado_em: Date;
}
