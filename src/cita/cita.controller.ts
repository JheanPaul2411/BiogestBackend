import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseBoolPipe,
	Patch,
	Post,
	Put,
	Query,
	UseGuards,
} from "@nestjs/common";
import { CreateCitaDTO, UpdateCitaDTO } from "./dto/Citas.dto";
import { CitaService } from "./cita.service";
import { JwtAuthGuard } from "src/auth/guard/jwt-auth.guard";
import { Roles } from "src/auth/decorators/Roles.decorator";
import { UserRole } from "@prisma/client";
import { RolesGuard } from "src/auth/guard/roles.guard";

@Controller("cita")
@UseGuards(JwtAuthGuard)
export class CitaController {
	constructor(private readonly citaService: CitaService) {}

	@UseGuards(RolesGuard)
	@Roles([UserRole.DOCTOR, UserRole.ADMIN])
	@Get("agenda/")
	async getByPacienteQuery(
		@Query("fecha") fecha?: string,
		@Query("aceptada", ParseBoolPipe) aceptada?: boolean,
	) {
		const parsedFecha = fecha ? new Date(fecha) : undefined;
		return await this.citaService.findCitasByPacienteQuery(
			parsedFecha,
			aceptada,
		);
	}

	/**
	 * Obtiene las citas de un paciente
	 */
	@Get("paciente/:id")
	async getByPaciente(
		@Param("id") id: string,
		@Query("aceptada", ParseBoolPipe) aceptada?: boolean | undefined | null,
	) {
		return await this.citaService.findCitasByPaciente(+id, aceptada);
	}
	/**
	 * Obtiene todas las citas
	 */
	@Get()
	@Roles([UserRole.DOCTOR, UserRole.ADMIN])
	@UseGuards(RolesGuard)
	async getAll() {
		return await this.citaService.findAllCitas();
	}

	/**
	 * Crea una nueva cita
	 */
	@Post()
	async createCita(@Body() createCitaDTO: CreateCitaDTO) {
		return await this.citaService.createCita(createCitaDTO);
	}

	/**
	 * Borra una cita existente
	 */
	@Delete(":id")
	async deleteCita(@Param("id") id: string) {
		return await this.citaService.deleteCita(parseInt(id));
	}

	/**
	 * Actualiza una cita existente
	 */
	@Put(":id")
	async updateCita(@Param("id") id: string, @Body() data: CreateCitaDTO) {
		return await this.citaService.updateCita(parseInt(id), data);
	}

	@Patch(':id')
	async updatePartialCita(@Param('id') id:string, @Body()data:UpdateCitaDTO ){
		return await this.citaService.patchCita(+id, data)
	}
}
