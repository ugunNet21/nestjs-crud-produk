import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Aktifkan transformasi otomatis
      transformOptions: {
        enableImplicitConversion: true, // Ubah string ke number secara otomatis
      },
    }),
  );

  await app.listen(3000);
}
bootstrap();
