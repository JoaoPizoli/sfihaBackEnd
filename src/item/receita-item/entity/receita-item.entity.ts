import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { ItemEntity } from "src/item/item/entity/item.entity";
import { ReceitaEntity } from "src/item/receita/entity/receita.entity";

@Entity({ name: 'receita_item'})
@Unique('uq_receita_item', ['receita_id', 'item_id'])
@Index('idx_receita_id', ['receita_id'])
@Index('idx_item_id', ['item_id'])
export class ReceitaItemEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'numeric', precision: 12, scale: 3, transformer: {to: (v: number) => v, from: (v: string) => Number(v) }})
    quantidade: number;

    @Column({ type: 'varchar', length: 120, nullable: true })
    observacao: string;

    @Column()
    receita_id: number;

    @Column()
    item_id: number;

    @ManyToOne(() => ReceitaEntity, (receita) => receita.itens, { onDelete: 'CASCADE'})
    @JoinColumn({ name: 'receita_id' })
    receita: ReceitaEntity;

    @ManyToOne(() => ItemEntity, (item) => item.receitas, { onDelete: 'RESTRICT'})
    @JoinColumn({ name: 'item_id' })
    item: ItemEntity;
}