export class CreateFichaMedicaDto {
    pacienteId?: number;
    peso?: number;
    altura?: number;
    presionArterial?: string;
    temperatura?: number;
    enfermedades?: string;
    alergias?: string;
    medicamentos?: string;
    antecedentesFamiliares?: string;
    antecedentesPersonales?: string;
    fecha?: Date;
    hora?: Date;
    observaciones?: string;
    diagnostico?: string;
    tratamiento?: string;
    proximaCita?: Date;
    proximaCitaHora?: Date;
}
