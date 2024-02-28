import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CreateCitaDTO } from './dto/Citas.dto';
import { CitaService } from './cita.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { Roles } from 'src/auth/decorators/Roles.decorator';
import { UserRole } from '@prisma/client';
import { RolesGuard } from 'src/auth/guard/roles.guard';

@Controller('cita')
@UseGuards(JwtAuthGuard)

export class CitaController {

    constructor(private readonly citaService: CitaService) { }

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
     * Obtiene las citas de un paciente
     */
    @Get('paciente/:id')
    async getByPaciente(@Param('id') id: string) {
        return await this.citaService.findCitasByPaciente(parseInt(id));
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
    @Delete(':id')
    async deleteCita(@Param('id') id: string) {
        return await this.citaService.deleteCita(parseInt(id));
    }


    /**
     * Actualiza una cita existente
     */
    @Put(':id')
    async updateCita(@Param('id') id: string, @Body() data: CreateCitaDTO) {
        return await this.citaService.updateCita(parseInt(id), data);
    }


}
