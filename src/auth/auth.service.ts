import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/Auth.dto';

@Injectable()
export class AuthService {

    constructor(private readonly userService:UsersService){}

    login() {
        return 'login';
    }

    async register(registerDto:RegisterDto) {
        const newUser = await this.userService.createUser(registerDto);
        return newUser;
    }
}
