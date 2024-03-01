import { CreateCitaDTO } from "src/cita/dto/Citas.dto";

export const citas:CreateCitaDTO[]=[
    {
        pacienteId:1,
        fecha: new Date('01/02/2024'),
        sintomas:'',
        motivo:'Quiero hacer Consulta prenatal integral'
    },
    {
        pacienteId:1,
        fecha: new Date('02/02/2024'),
        sintomas:'Tengo mucho dolor abdominal, tengo fiebre y escalofríos',
        motivo:'Dolor'
    },
    {
        pacienteId:2,
        fecha: new Date('02/02/2024'),
        sintomas:'lorem ipsum dolor',
        motivo:'Lorem'
    },
    {
        pacienteId:2,
        fecha: new Date('03/02/2024'),
        sintomas:'lorem ipsum dolor2',
        motivo:'Lorem2'
    }
]