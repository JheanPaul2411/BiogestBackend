import { Module } from '@nestjs/common';
import { FichaMedicaService } from './ficha_medica.service';
import { FichaMedicaController } from './ficha_medica.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [FichaMedicaController],
  providers: [FichaMedicaService],
  exports:[FichaMedicaService],
  imports:[PrismaModule]
})
export class FichaMedicaModule {}
