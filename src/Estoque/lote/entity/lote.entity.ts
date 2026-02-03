import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EstoqueEntity } from 'src/Estoque/estoque/entity/estoque.entity';

@Entity({ name: 'lote' })
@Index('idx_lote_estoque_id', ['estoque_id'])
export class LoteEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(()=>EstoqueEntity, estoque => estoque.lotes,{onDelete: 'RESTRICT'})
  @JoinColumn({name: 'estoque_id'})
  estoque: EstoqueEntity;

  @Column()
  estoque_id: number; 

  @Column()
  data_validade: Date;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
