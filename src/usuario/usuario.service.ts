import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { CreateUsuarioDto} from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-user.dto';


@Injectable()
export default class UsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private usuarioRepository: Repository<UsuarioEntity>
    ){}

    findAll(): Promise<UsuarioEntity[]> {
        return this.usuarioRepository.find();
    }

    findOne(id: number): Promise<UsuarioEntity | null> {
        return this.usuarioRepository.findOneBy({id})
    }

    async create(usuarioDados: CreateUsuarioDto): Promise<UsuarioEntity>{
        const user = this.usuarioRepository.create(usuarioDados)
        return this.usuarioRepository.save(user)
    }

    async update(id: number, usuarioData: UpdateUsuarioDto): Promise<UsuarioEntity | null>{
        await this.usuarioRepository.update(id, usuarioData)
        return this.findOne(id)
    }

    async remove(id: number): Promise<void> {
        await this.usuarioRepository.delete(id)
    }

}
