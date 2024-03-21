import {  Module  } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CitaService } from './cita/cita.service';
import { CitaModule } from './cita/cita.module';
import { FichaMedicaModule } from './ficha_medica/ficha_medica.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule, ConfigModule.forRoot(), CitaModule, FichaMedicaModule,
    ServeStaticModule.forRoot({
      serveRoot: '/src/upload', // Ruta base para servir archivos estáticos
      rootPath: join(__dirname, '..','..', 'src', 'upload'), // Ruta al directorio de imágenes

    }),
  ],
  controllers: [],
  providers: [CitaService],
})
export class AppModule  {
}

console.log(join(__dirname, '..','..', 'src', 'upload'))
