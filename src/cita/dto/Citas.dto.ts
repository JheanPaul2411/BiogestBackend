// CitaDTO.ts

export interface CitaDTO {
    id: number;
    fecha: string;
    pacienteId?: number;
    motivo: string;
    sintomas?: string;
    acetpada?:boolean;

  }

  export interface CreateCitaDTO {
    fecha: Date;
    pacienteId?: number;
    motivo: string;
    sintomas?: string;
    acetpada:boolean;
  }
  
  