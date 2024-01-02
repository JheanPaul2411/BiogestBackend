import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterDto } from 'src/auth/dto/Auth.dto';

@Controller('usuarios')
export class UsersController {

    constructor(private readonly userService:UsersService){}

    @Post()
    async create(@Body() userDTO: RegisterDto) {
        return await this.userService.createUser(userDTO);
    }
}
