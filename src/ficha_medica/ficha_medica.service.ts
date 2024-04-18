import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateFichaMedicaDto } from "./dto/create-ficha_medica.dto";
import { UpdateFichaMedicaDto } from "./dto/update-ficha_medica.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class FichaMedicaService {
	constructor(private readonly prismaService: PrismaService) {}

	create(createFichaMedicaDto: CreateFichaMedicaDto) {
		const ficha_medica = this.prismaService.fichaMedica.create({
			data: {
				...createFichaMedicaDto,
			},
		});

		if (!ficha_medica)
			throw new HttpException(
				"Error al crear la ficha medica",
				HttpStatus.BAD_REQUEST,
			);

		return ficha_medica;
	}

	findAll() {
		const fichas_medicas = this.prismaService.fichaMedica.findMany({
			include: { paciente: true },
		});

		if (!fichas_medicas)
			throw new HttpException(
				"No se encontraron fichas medicas",
				HttpStatus.NOT_FOUND,
			);

		return fichas_medicas;
	}

	findOne(id: number) {
		const ficha_medica = this.prismaService.fichaMedica.findUnique({
			where: {
				id,
			},
		});

		if (!ficha_medica)
			throw new HttpException(
				`No se encontró una ficha medica con id ${id}`,
				HttpStatus.NOT_FOUND,
			);

		return ficha_medica;
	}

	update(id: number, updateFichaMedicaDto: UpdateFichaMedicaDto) {
		const ficha_medica = this.prismaService.fichaMedica.update({
			where: {
				id,
			},
			data: updateFichaMedicaDto,
		});

		if (!ficha_medica)
			throw new HttpException(
				`No fue posible actualizar la ficha médica con el id ${id}`,
				HttpStatus.BAD_REQUEST,
			);

		return ficha_medica;
	}

	remove(id: number) {
		const oneFichaMedica = this.findOne(id);
		if (!oneFichaMedica)
			throw new HttpException(
				`No se encontró una ficha medica con id ${id}`,
				HttpStatus.NOT_FOUND,
			);

		const ficha_medica = this.prismaService.fichaMedica.delete({
			where: {
				id,
			},
		});
		if (!ficha_medica)
			throw new HttpException(
				`No fue posible eliminar la ficha médica con el id ${id}`,
				HttpStatus.BAD_REQUEST,
			);

		return ficha_medica;
	}

	findAllByUser(pacienteId: number) {
		const fichas = this.prismaService.fichaMedica.findMany({
			where: {
				pacienteId,
			},
			include: {
				paciente: true,
			},
		});

		if (!fichas)
			throw new HttpException(
				"Este usuairo aún no tiene un historial médico.",
				HttpStatus.NOT_FOUND,
			);

		return fichas;
	}
}
