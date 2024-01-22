import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RegisterDto } from 'src/auth/dto/Register.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) { }

    async findAllUsers() {
        const allUsers = await this.prisma.usuario.findMany();
        if (!allUsers) throw new HttpException('No existen usuarios', HttpStatus.BAD_REQUEST)

        return allUsers
    }

    async findUserByEmail(email: string) {
        try {
            const user = await this.prisma.usuario.findUnique({
                where: {
                    email: email,
                }
            })
            return user;
        } catch (error) {
            console.error(error);
        }
    }


    async findUserByCedula(cedula: string) {
        const user = await this.prisma.usuario.findUnique({
            where: {
                cedula
            }
        });
        return user;
    }

    async findUserByID(id:number) {
        try {
            const user = this.prisma.usuario.findUnique({
                where:{
                    id
                }
            });

            if(!user){
                throw new Error("User not found");
            }
            return user;
            
        } catch (error) {
            console.log(error)
        }
    }


    async createUser(createUserDTO: RegisterDto) {
        const userEmailExists = await this.findUserByEmail(createUserDTO.email);
        const userCedulaExists = await this.findUserByCedula(createUserDTO.cedula);

        if (userEmailExists)
            throw new HttpException('Ya existe un usuario con ese email', HttpStatus.BAD_REQUEST);

        if (userCedulaExists)
            throw new HttpException('Ya existe un usuario con ese número de cédula', HttpStatus.BAD_REQUEST);


        const newUser = await this.prisma.usuario.create({
            data: {
                ...createUserDTO,
                fecha_nacimiento: new Date(createUserDTO.fecha_nacimiento)
            },

        });

        return newUser;
    }

   
}
