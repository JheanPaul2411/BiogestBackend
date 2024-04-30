import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateCitaDTO } from "./dto/Citas.dto";
import { Prisma } from "@prisma/client";

@Injectable()
export class CitaService {
	constructor(private readonly prisma: PrismaService) {}

	async findAllCitas() {
		const allCitas = await this.prisma.cita.findMany({
			include: {
				paciente: true,
			},
			orderBy: {
				fecha: "desc",
			},
		});
		return allCitas;
	}

	async findCitasByPaciente(id: number, aceptada?: boolean) {
		const where = {
			pacienteId: id,
		};

		// Si se proporciona el valor de 'aceptada', se agrega la condición al objeto 'where'
		if (aceptada !== undefined) {
			where["aceptada"] = aceptada;
		}

		const allCitas = await this.prisma.cita.findMany({
			where,
			include: { paciente: true },
		});

		return allCitas;
	}

	async findCitasByPacienteAndDate(id: number, date: Date) {
		const allCitas = await this.prisma.cita.findMany({
			where: {
				pacienteId: id,
				fecha: date,
			},
		});
		if (!allCitas)
			throw new HttpException(
				"No existe una cita con esas especificaciones",
				HttpStatus.NOT_FOUND,
			);

		return allCitas;
	}

	async createCita(createCitaDTO: CreateCitaDTO) {
		/*console.log(createCitaDTO)
        // Crear un objeto Date con la hora y la fecha adecuadas
        const fechaHora = new Date(createCitaDTO.fecha);
        console.log(fechaHora)
        fechaHora.setHours(createCitaDTO.hora.getHours(), createCitaDTO.hora.getMinutes(), 0, 0);
    */
		const newCita = await this.prisma.cita.create({
			data: {
				...createCitaDTO,
				fecha: new Date(createCitaDTO.fecha),
			},
		});
		console.log(createCitaDTO.fecha);

		if (!newCita) {
			throw new HttpException(
				"Error al crear la cita",
				HttpStatus.BAD_REQUEST,
			);
		}

		return newCita;
	}

	async deleteCita(id: number) {
		const cita = await this.prisma.cita.delete({
			where: {
				id,
			},
		});

		if (!cita)
			throw new HttpException(
				"Error al eliminar la cita",
				HttpStatus.BAD_REQUEST,
			);

		return cita;
	}

	async updateCita(id: number, data: CreateCitaDTO) {
		const cita = await this.prisma.cita.update({
			where: {
				id,
			},
			data: data,
		});

		if (!cita)
			throw new HttpException(
				"Error al actualizar la cita",
				HttpStatus.BAD_REQUEST,
			);

		return cita;
	}

	async findCitasByPacienteQuery(fecha?: Date, aceptada?: boolean) {
		try {
		  const allCitas = await this.prisma.$queryRaw(Prisma.sql`
			SELECT
			  c.id,
			  c.fecha,
			  c.pacienteId,
			  c.motivo,
			  c.sintomas,
			  c.aceptada,
			  u.nombre,
			  u.apellido,
			  u.photoUrl
			FROM Cita c
			JOIN Usuario u ON c.pacienteId = u.id
			WHERE DATE(c.fecha) = DATE(${fecha})
			  AND c.aceptada = ${aceptada};
		  `);
		  console.log(allCitas);
		  return allCitas;
		} catch (error) {
		  console.log(error);
		  throw new Error("Error: " + error);
		}
	  }
}
