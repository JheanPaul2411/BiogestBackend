import { hash } from 'bcrypt';
import { users } from './users';
import { PrismaClient } from '@prisma/client'
import { citas } from "./citas";
const prisma = new PrismaClient();

async function main() {
    for (const user of users) {
        const passwordHashed = await hash(user.password, 10);
        const data = { ...user, password: passwordHashed };

        await prisma.usuario.create({
            data
        })
    }

    for (const cita of citas) {
        await prisma.cita.create({
            data: {
                paciente: {
                    connect: { id: cita.pacienteId }
                },
                fecha:cita.fecha,
                motivo:cita.motivo,
                sintomas:cita.sintomas
            }

        })
    }


}

main().catch(e => {
    console.log(e);
    process.exit(1);
}).finally(() => {
    prisma.$disconnect();
});