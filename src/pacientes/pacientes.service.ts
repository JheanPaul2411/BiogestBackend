import { Injectable } from '@nestjs/common';
import { Paciente } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PacientesService {

    constructor(private prisma:PrismaService) {}

    async getAllPacientes() {
        return this.prisma.paciente.findMany();
    }

    async createPaciente(data:Paciente) {
        const newPacietne = await this.prisma.paciente.create({
            data
        });
        return newPacietne;
    }

    async getOnePaciente(id:number){
        return this.prisma.paciente.findUnique({
            where:{id}
        })
    }

    async updatePaciente(id:number, data:Paciente) {
        return  this.prisma.paciente.update({
            where: { id },
            data
        })
    }

    async deletePaciente(id: number) {
        return this.prisma.paciente.delete({ where: { id } });
    }
}
