import { Body, Controller, Post, Req, Get, UseInterceptors, UploadedFile } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/Register.dto';
import { LoginDTO } from './dto/Login.dto';
import * as jwt from 'jsonwebtoken';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    login(@Body() loginDto: LoginDTO) {
        return this.authService.login(loginDto);
    }

    @Post('register')
    @UseInterceptors(FileInterceptor('photoUrl', {
        storage: diskStorage({
            destination: '../uploads',
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
                return cb(null, `${randomName}${extname(file.originalname)}`);
            }
        })
    }))
    async create(@UploadedFile() file, @Body() registerDto: RegisterDto) {
        console.log(file)
        console.log(registerDto)
        const photoUrl = `http://localhost:3000/uploads/${file.filename}`;
        const user = await this.authService.register({ ...registerDto, photoUrl });
        return user;
    }

    @Get('validate')
    async validateToken(@Req() request: any) {
        let token: string = request.headers.authorization;
        token = token.trim();


        try {
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            if(decodedToken){
                return { isValid: true };
            }else{
                return { isValid: false }; 
            }
        } catch (err) {
            return { isValid: false };
        }
    }
}
