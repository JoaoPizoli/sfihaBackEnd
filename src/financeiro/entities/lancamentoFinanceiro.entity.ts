import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'lancamento_financeiro' })
export class LancamentoFinanceiroEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipo: string;

  @Column()
  valor: number;

  @Column()
  categoria: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_At: Date;

  @Column()
  referencia_id: number; // FK Opcional que se refere a origem do lancamento (EX: Id do pedido sera o mesmo da referencia_id)
}
