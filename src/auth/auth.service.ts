import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/Register.dto';
import { hash, compare } from 'bcrypt';
import { LoginDTO } from './dto/Login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UsersService,
        private readonly jwtAuthService: JwtService
    ) { }

    async login(loginDto: LoginDTO) {
        const { email, password } = loginDto;
        const findUSer = await this.userService.findUserByEmail(email);
        if (!findUSer) throw new HttpException('El usuario no se encontró', 404);

        const checkPassword = await compare(password, findUSer.password);

        if (!checkPassword) throw new HttpException('La contraseña es incorrecta', HttpStatus.FORBIDDEN);

        const payload = { id: findUSer.id, name: findUSer.nombre, rol:findUSer.rol }
        const token = await this.jwtAuthService.sign(payload)

        const userCopy = { ...findUSer };

        delete userCopy.password;

        const data = {
            user: userCopy,
            token
        };
        return data;
    }


    async register(registerDto: RegisterDto) {
        const { password } = registerDto;
        if (!password) {
            throw new BadRequestException('La contraseña no puede estar vacía');
        }
        const passwordHashed = await hash(password, 10);
        registerDto = { ...registerDto, password: passwordHashed };

        const newUser = await this.userService.createUser(registerDto);
        return newUser;
    }

  
}
