import { IsBoolean, IsEmail, IsOptional, IsString, MinLength } from "class-validator";


export class CreateUsuarioDto {
    @IsString()
    nome_usuario: string;

    @IsEmail({}, { message: 'Email inválido' })
    email: string;

    @IsString()
    @MinLength(6, { message: 'Senha deve ter no mínimo 6 caracteres'})
    senha: string;

    @IsBoolean()
    @IsOptional()
    status: boolean
}