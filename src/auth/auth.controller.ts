import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/Register.dto';
import { LoginDTO } from './dto/Login.dto';
import * as jwt from 'jsonwebtoken';


@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post('login')
    login(@Body() loginDto: LoginDTO) {
        return this.authService.login(loginDto);
    }

    @Post('register')
    register(@Body() registerDto: RegisterDto) {
        return this.authService.register(registerDto);
    }

    
    
    /*
    !ERROR:
    Cuando envio el token que se almacena en el session storage del usario desde React, no funciona (me dice que el token no es válido).
    Sin embargo, cuando envío el mismo token desde POSTMAN, si funciona (me dice que el token si es válido).
    
    ?Ya verifiqué los CORS, y admití las peticiones desde React, pero sigue sin funcionar */
    
    @Get('validate')
    async validateToken(@Req() request) {
        const token = request.headers.authorization;
        console.log('Received token:', token);

        try {
            jwt.verify(token, process.env.JWT_SECRET);
            console.log('Token verification successful');
            return { isValid: true };
        } catch (err) {
            console.error('Token verification failed:', err);
            return { isValid: false };
        }
    }


}
