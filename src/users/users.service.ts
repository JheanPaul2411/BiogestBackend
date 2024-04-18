import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UserRole } from "@prisma/client";
import { RegisterDto } from "src/auth/dto/Register.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateUserDTO } from "./dto/updateUser";

@Injectable()
export class UsersService {
	constructor(private readonly prisma: PrismaService) {}

	async findAllUsers() {
		const allUsers = await this.prisma.usuario.findMany();
		if (!allUsers)
			throw new HttpException(
				"No existen usuarios",
				HttpStatus.BAD_REQUEST,
			);

		return allUsers;
	}

	async findUserByEmail(email: string) {
		try {
			const user = await this.prisma.usuario.findUnique({
				where: {
					email: email,
				},
			});
			return user;
		} catch (error) {
			console.error(error);
		}
	}

	async findUserByCedula(cedula: string) {
		const user = await this.prisma.usuario.findUnique({
			where: {
				cedula,
			},
		});
		return user;
	}

	async findUserByID(id: number) {
		try {
			const user = this.prisma.usuario.findUnique({
				where: {
					id,
				},
			});

			if (!user) {
				throw new Error("User not found");
			}
			return user;
		} catch (error) {
			console.log(error);
		}
	}

	async findUserByRole(role: UserRole) {
		try {
			const user = this.prisma.usuario.findMany({
				where: {
					rol: role,
				},
			});
			if (!user)
				throw new HttpException(
					"Users not found",
					HttpStatus.NOT_FOUND,
				);

			return user;
		} catch (error) {
			throw new HttpException(
				"Error:" + error,
				HttpStatus.INTERNAL_SERVER_ERROR,
			);
		}
	}

	async createUser(createUserDTO: RegisterDto & { photoUrl?: string }) {
		const userEmailExists = await this.findUserByEmail(createUserDTO.email);
		const userCedulaExists = await this.findUserByCedula(
			createUserDTO.cedula,
		);

		if (userEmailExists)
			throw new HttpException(
				"Ya existe un usuario con ese email",
				HttpStatus.BAD_REQUEST,
			);

		if (userCedulaExists)
			throw new HttpException(
				"Ya existe un usuario con ese número de cédula",
				HttpStatus.BAD_REQUEST,
			);

		const newUser = await this.prisma.usuario.create({
			data: {
				...createUserDTO,
				fecha_nacimiento: new Date(createUserDTO.fecha_nacimiento),
				photoUrl: createUserDTO.photoUrl,
			},
		});

		return newUser;
	}

	async updateUser(updateUserDto: UpdateUserDTO, id: number) {
		const updatedUser = this.prisma.usuario.update({
			where: {
				id,
			},
			data: updateUserDto,
		});

		if (!updateUserDto) {
            throw new HttpException("No se ha podido actualizar el usuario",HttpStatus.BAD_REQUEST)
		}

        return updatedUser;
	}
}
