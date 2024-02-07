// CitaDTO.ts

export interface CitaDTO {
    id: number;
    fecha: Date;
    hora: Date;
    pacienteId?: number;
    motivo: string;
    sintomas?: string;
  }

  export interface CreateCitaDTO {
    fecha: Date;
    hora: Date;
    pacienteId?: number;
    motivo: string;
    sintomas?: string;
  }
  
  