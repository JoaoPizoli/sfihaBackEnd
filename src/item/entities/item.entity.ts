import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'item' })
export class ItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  ativo: boolean;

  @Column()
  unidade_medida: string;

  @Column()
  minimo_necessario: number;

  @Column()
  aceitar_pedido: boolean;

  @Column()
  vende: boolean; // Valida se o item e para venda final ou se e materia prima

  @Column()
  controla_estoque: boolean; // Valida se o item entra no controle de estoque ou se nao entra(EX: Taxa de entrega e outros servicos/itens)
}
