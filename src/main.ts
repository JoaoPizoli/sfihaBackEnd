import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Remove campos não definidos no DTO
    forbidNonWhitelisted: true, // Retorna erro se enviar campo extra
    transform: true, // Transforma os tipos automaticamente
  }))

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
