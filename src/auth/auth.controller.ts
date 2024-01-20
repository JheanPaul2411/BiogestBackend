import { Body, Controller, Post, Req, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/Register.dto';
import { LoginDTO } from './dto/Login.dto';
import * as jwt from 'jsonwebtoken';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

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
    async validateToken(@Req() request: any) {
        let token: string = request.headers.authorization;
        token = token.trim();

        console.log('Received token:', token);

        try {
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            console.log('Token verification successful');
            console.log('Decoded token:', decodedToken);
            return { isValid: true };
        } catch (err) {
            console.error('Token verification failed:', err);
            console.log('\n');
            console.log(token);
            return { isValid: false };
        }
    }
}
