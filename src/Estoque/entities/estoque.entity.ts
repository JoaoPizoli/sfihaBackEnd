import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'estoque' })
export class EstoqueEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  item_id: number; //FK de Item

  @Column()
  lote_id: number; //FK de Lote

  @Column()
  quantia_atual: number;

  @Column()
  status: string;
}
