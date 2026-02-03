import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ReceitaItemEntity } from 'src/item/receita-item/entity/receita-item.entity';

@Entity({ name: 'receita' })
export class ReceitaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 120 })
  nome: string;

  @OneToMany(() => ReceitaItemEntity, (receitaItem) => receitaItem.receita, {
    cascade: ['insert', 'update'],
    orphanedRowAction: 'delete'
  })
  itens: ReceitaItemEntity[]; 
}
