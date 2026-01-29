import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'pedido_item' })
export class PedidoItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pedido_id: number; //FK de Pedido

  @Column()
  item_id: number; //FK de Item

  @Column()
  quantidade: number;

  @Column()
  preco_unitario: number;

  @Column()
  observacao: string;
}
