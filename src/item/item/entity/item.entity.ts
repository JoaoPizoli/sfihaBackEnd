import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UnidadeMedidaItemEnum } from '../enum/unidadeMedida-item.enum';
import { TipoItemEnum } from '../enum/tipo-item.enum';
import { ReceitaItemEntity } from 'src/item/receita-item/entity/receita-item.entity';
import { PedidoItemEntity } from 'src/pedido/pedido-item/entity/pedido_item.entity';

@Entity({ name: 'item' })
export class ItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 150})
  nome: string;

  @Column({ type: 'enum', enum: UnidadeMedidaItemEnum })
  unidade_medida: UnidadeMedidaItemEnum;

  @Column({ default: true })
  ativo: boolean;

  @OneToMany(() => ReceitaItemEntity, (receita) => receita.item)
  receitas: ReceitaItemEntity[]

  @OneToOne(() => PedidoItemEntity, (pedidoItem) => pedidoItem.item)
  pedido_item: PedidoItemEntity;

  @Column({ default: 0 })
  minimo_necessario: number;

  @Column({ default: true })
  aceitar_pedido: boolean;

  @Column({ type: 'enum', enum: TipoItemEnum })
  tipo: TipoItemEnum; 

  @Column({ type: 'boolean'})
  controla_estoque: boolean; 
}
