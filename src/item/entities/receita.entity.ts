import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity({ name: 'receita' })
export class ReceitaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  item_id: number; //FK de Item

  @Column()
  ingrediente_id: number; //FK de Item tambem

  @Column()
  quantidade: number;

  @Column()
  unidade: string;
}
