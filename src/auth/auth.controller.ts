import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/Register.dto';
import { LoginDTO } from './dto/Login.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService:AuthService){}

    @Post('login')
    login(@Body() loginDto:LoginDTO) {
        return this.authService.login(loginDto);
    }

    @Post('register')
    register(@Body() registerDto: RegisterDto) {
        return this.authService.register(registerDto);
    }
}
