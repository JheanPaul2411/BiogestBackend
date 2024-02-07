import {  Module  } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import {  } from './auth/auth.middleware';
import { CitaService } from './cita/cita.service';
import { CitaModule } from './cita/cita.module';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule, ConfigModule.forRoot(), CitaModule,
  ],
  controllers: [],
  providers: [CitaService],
})
export class AppModule  {
  /*
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('login')
  }
  */
}
