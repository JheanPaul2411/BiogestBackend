import { Module } from '@nestjs/common';
import { CitaService } from './cita.service';
import { CitaController } from './cita.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    providers: [CitaService],
    controllers: [CitaController],
    exports:[CitaService],
    imports:[PrismaModule],
})
export class CitaModule {}
