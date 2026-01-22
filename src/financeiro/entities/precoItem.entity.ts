import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'preco_item' })
export class PrecoItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  item_id: number; //FK de Item

  @Column()
  valor: number;

  @UpdateDateColumn({ type: 'timestamp' })
  alterado_em: Date;
}
