import { Module } from '@nestjs/common';
import { PacientesModule } from './pacientes/pacientes.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PacientesModule, PrismaModule, UsersModule, AuthModule],
  controllers: [],
})
export class AppModule {}
