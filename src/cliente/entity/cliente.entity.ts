import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'cliente' })
export class ClienteEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  telefone: number;

  @Column()
  endereco: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
