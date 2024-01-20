import {  Module  } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import {  } from './auth/auth.middleware';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule, ConfigModule.forRoot(),
  ],
  controllers: [],
})
export class AppModule  {
  /*
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('login')
  }
  */
}
