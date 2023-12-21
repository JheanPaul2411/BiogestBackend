import { Module } from '@nestjs/common';
import { PacientesModule } from './pacientes/pacientes.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PacientesModule, PrismaModule],
  controllers: [],
})
export class AppModule {}
