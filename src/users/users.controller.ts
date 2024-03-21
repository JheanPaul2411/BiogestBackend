import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { UserRole } from '@prisma/client';

@Controller('usuarios')

export class UsersController {

    constructor(private readonly userService: UsersService) { }
    

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll() {
        return await this.userService.findAllUsers();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getById(@Param('id') id: string) {
        return await this.userService.findUserByID(parseInt(id));
    }

    @UseGuards(JwtAuthGuard)
    @Get('rol/:role')
    async getByRole(@Param('role') role: UserRole) {
        return await this.userService.findUserByRole(role);
    }
}
