import { Controller, Get, Param, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterDto } from 'src/auth/dto/Register.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { UserRole } from '@prisma/client';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('usuarios')

export class UsersController {

    constructor(private readonly userService: UsersService) { }

    @Post()
    @UseInterceptors(FileInterceptor('photo', {
        storage: diskStorage({
            destination: './uploads',
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
                return cb(null, `${randomName}${extname(file.originalname)}`);
            }
        })
    }))
    async create(@UploadedFile() file, registerDto: RegisterDto) {
        const photoUrl = `http://localhost:3000/uploads/${file.filename}`;
        const user = await this.userService.createUser({ ...registerDto, photoUrl });
        return user;
    }

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
