import { ItemEntity } from 'src/item/entities/item.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'preco_item' })
export class PrecoItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ItemEntity, {onDelete: 'CASCADE'})
  @JoinColumn({ name: 'item_id'})
  item: ItemEntity;

  @Column()
  item_id: number; 

  @Column()
  valor: number;

  @UpdateDateColumn({ type: 'timestamp' })
  alterado_em: Date;
}
