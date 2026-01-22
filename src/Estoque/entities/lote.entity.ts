import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'lote' })
export class LoteEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  item_id: number; //FK da tabela Item

  @Column()
  data_validade: Date;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
