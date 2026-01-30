import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { LancamentoReferenciaTipoEnum } from '../enum/lancamento-referencia-tipo.enum';
import { LancamentoCategoriaEnum } from '../enum/lancamento-categoria.enum';
import { LancamentoTipoEnum } from '../enum/lancamento-tipo.enum';

@Entity({ name: 'lancamento_financeiro' })
export class LancamentoFinanceiroEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: LancamentoTipoEnum,  
  })
  tipo: LancamentoTipoEnum;

  @Column()
  valor: number;

  @Column({
    type: 'enum',
    enum: LancamentoCategoriaEnum,
  })
  categoria: LancamentoCategoriaEnum;

  @CreateDateColumn({ type: 'timestamp' })
  created_At: Date;

  @Column({
    type: 'enum',
    enum: LancamentoReferenciaTipoEnum,
  })
  referencia_tipo: LancamentoReferenciaTipoEnum

  @Column()
  referencia_id: LancamentoReferenciaTipoEnum;
}
