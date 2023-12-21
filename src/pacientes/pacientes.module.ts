import { Module } from '@nestjs/common';
import { PacientesService } from './pacientes.service';
import { PacientesController } from './pacientes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [PacientesService],
  controllers: [PacientesController],
  imports:[PrismaModule]
})
export class PacientesModule {}
