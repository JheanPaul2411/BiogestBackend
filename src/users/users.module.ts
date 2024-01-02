import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  exports:[UsersService],
  imports:[PrismaModule],
})
export class UsersModule {}
