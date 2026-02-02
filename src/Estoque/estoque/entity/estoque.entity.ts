import { LoteEntity } from 'src/Estoque/lote/entity/lote.entity';
import { ItemEntity } from 'src/item/entities/item.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { StatusEstoqueEnum } from '../enum/status-estoque.enum';

@Entity({ name: 'estoque' })
export class EstoqueEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(()=> ItemEntity, { onDelete: 'RESTRICT'})
  @JoinColumn({ name: 'item_id'})
  item: ItemEntity

  @Column()
  item_id: number;

  @Column({ type: 'int', default: 0 })
  quantidade_atual: number;

  @Column({
    type: 'enum',
    enum: StatusEstoqueEnum,
    default: StatusEstoqueEnum.EM_ESTOQUE
  })
  status: string;

  @OneToMany(()=> LoteEntity, lote => lote.estoque)
  lotes: LoteEntity[]
}
