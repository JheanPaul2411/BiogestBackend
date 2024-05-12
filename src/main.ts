import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cors({
    
    origin: ['http://localhost:5173', 'http://localhost:8080'],  // o '*' para permitir desde cualquier origen
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'], // Métodos permitidos
    exposedHeaders: ['Content-Type', 'Authorization'],  // Cabeceras permitidas
    credentials: true,  // Habilita el envío de credenciales (cookies, tokens)
  }));

  await app.listen(3000);


}
bootstrap();
