import {
	Body,
	Controller,
	Post,
	Req,
	Get,
	UseInterceptors,
	UploadedFile,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterDto } from "./dto/Register.dto";
import { LoginDTO } from "./dto/Login.dto";
import * as jwt from "jsonwebtoken";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import * as sharp from "sharp";
import * as fs from "fs";

@Controller("auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post("login")
	login(@Body() loginDto: LoginDTO) {
		return this.authService.login(loginDto);
	}

	@Post("register")
	@UseInterceptors(
		FileInterceptor("photoUrl", {
			storage: diskStorage({
				destination: "./src/upload",
				filename: (req, file, cb) => {
					const name = file?.originalname.split("")[0];
					const filename = file?.originalname;
					const randomName = Array(4)
						.fill(null)
						.map(() => Math.round(Math.random() * 16).toString())
						.join("");
					cb(null, `${name}-${randomName}${filename}`);
				},
			}),
		}),
	)
	async create(
		@UploadedFile() file: Express.Multer.File,
		@Body() registerDto: RegisterDto,
	) {
		const maxSize = 500000; // 500KB

		if (file) {
			const photoUrl = `http://localhost:3000/src/upload/${file.filename}`;

			// Verificar si el archivo es demasiado grande
			if (file.size > maxSize) {
				// Optimizar la imagen
				const optimizedImageBuffer = await sharp(file.buffer)
					.jpeg({ quality: 80 })
					.toBuffer();

				// Escribir la imagen optimizada en un nuevo archivo
				const optimizedFilename = `optimized-${file.filename}`;
				const optimizedFilePath = `./src/upload/${optimizedFilename}`;
				await fs.promises.writeFile(
					optimizedFilePath,
					optimizedImageBuffer,
				);

				// Actualizar la ruta de la imagen optimizada
				registerDto.photoUrl = `http://localhost:3000/src/upload/${optimizedFilename}`;
			} else {
				registerDto.photoUrl = photoUrl;
			}
		}

		const user = await this.authService.register(registerDto);
		return user;
	}

	@Get("validate")
	async validateToken(@Req() request: any) {
		let token: string = request.headers.authorization;
		token = token.trim();
		try {
			const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
			if (decodedToken) {
				return { isValid: true };
			} else {
				return { isValid: false };
			}
		} catch (err) {
			return { isValid: false };
		}
	}
}
