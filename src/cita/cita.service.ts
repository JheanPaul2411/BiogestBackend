import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCitaDTO } from './dto/Citas.dto';

@Injectable()
export class CitaService {

    constructor(private readonly prisma: PrismaService) { }

    async findAllCitas() {
        const allCitas = await this.prisma.cita.findMany({
            include:{
                paciente:true
            },
            orderBy:{
                fecha:'desc'
            }
        });
        return allCitas
    }

    async findCitasByPaciente(id: number) {
        const allCitas = await this.prisma.cita.findMany({
            where: {
                pacienteId: id
            }
        });
        return allCitas
    }

    async findCitasByPacienteAndDate(id: number, date: Date) {
        const allCitas = await this.prisma.cita.findMany({
            where: {
                pacienteId: id,
                fecha: date
            }
        });
        if (!allCitas) throw new HttpException("No existe una cita con esas especificaciones", HttpStatus.NOT_FOUND);

        return allCitas
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
            }
        });
    
        if (!newCita) {
            throw new HttpException("Error al crear la cita", HttpStatus.BAD_REQUEST);
        }
    
        return newCita;
    }
    

    async deleteCita(id: number) {
        const cita = await this.prisma.cita.delete({
            where: {
                id
            }
        });

        if (!cita) throw new HttpException("Error al eliminar la cita", HttpStatus.BAD_REQUEST);

        return cita;
    }

    async updateCita(id: number, data: CreateCitaDTO) {
        const cita = await this.prisma.cita.update({
            where: {
                id
            },
            data:data
        });

        if (!cita) throw new HttpException("Error al actualizar la cita", HttpStatus.BAD_REQUEST);

        return cita;
    }
}
