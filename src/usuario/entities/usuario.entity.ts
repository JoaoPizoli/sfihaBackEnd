import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'usuario' })
export class UsuarioEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome_usuario: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  status: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
