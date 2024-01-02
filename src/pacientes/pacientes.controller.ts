import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { PacientesService } from './pacientes.service'
import { Paciente } from "@prisma/client";

@Controller('pacientes')
export class PacientesController {

    constructor(private pacientesService:PacientesService ) {
        
    }

    @Get()
    async getPaciente() {
        return this.pacientesService.getAllPacientes()
    }

    @Get(':id')
    async getOnePaciente(@Param('id') id:string) {
        const paciente = this.pacientesService.getOnePaciente(Number(id));
        if (!paciente) throw new NotFoundException('El paciente no existe');
        return paciente;
    } 

    @Post()
    async crearPaciente(@Body() data: Paciente) {
        return this.pacientesService.createPaciente(data);
    }

    @Put(':id')
    async updatePaciente(@Param('id') id:string, @Body() data:Paciente) {
        const updatedClient = this.pacientesService.updatePaciente(Number(id), data);
        try {
            return await updatedClient;
        } catch (error) {
            throw new NotFoundException('El cliente que intentas modificar no existe');        
        }


    }

    @Delete(':id')
    async deletePaciente(@Param('id') id:string) {
        const deletedPaciente = this.pacientesService.deletePaciente(Number(id));
        try {
            return await deletedPaciente;
        } catch (error) {
            throw new NotFoundException('No se ha podido eliminar ningún paciente, ya que no se ha encontrado');
        }
    }


}
