import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PedidoEntity } from 'src/pedido/pedido/entity/pedido.entity';
import { ItemEntity } from 'src/item/item/entity/item.entity';

@Entity({ name: 'pedido_item' })
export class PedidoItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => PedidoEntity, (pedido) => pedido.pedido_item, { onDelete: 'RESTRICT'})
  @JoinColumn({ name: 'pedido_id'})
  pedido: PedidoEntity;
  
  @Column()
  pedido_id: string;

  @OneToOne(()=> ItemEntity, (item) => item)
  @JoinColumn({ name: 'item_id'})
  item: ItemEntity;

  @Column()
  item_id: number;

  @Column()
  quantidade: number;

  @Column()
  observacao: string;
}
