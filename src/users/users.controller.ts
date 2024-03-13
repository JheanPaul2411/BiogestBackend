import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterDto } from 'src/auth/dto/Register.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { UserRole } from '@prisma/client';

@Controller('usuarios')

export class UsersController {

    constructor(private readonly userService:UsersService){}


    @Post()
    async create(@Body() userDTO: RegisterDto) {
        return await this.userService.createUser(userDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll() {
        return await this.userService.findAllUsers();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getById(@Param('id') id:string){
        return await this.userService.findUserByID(parseInt(id));
    }

    @UseGuards(JwtAuthGuard)
    @Get('rol/:role')
    async getByRole(@Param('role') role:UserRole){
        return await this.userService.findUserByRole(role);
    }
}
