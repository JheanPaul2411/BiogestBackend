// CitaDTO.ts

import { PartialType } from "@nestjs/mapped-types";

export interface CitaDTO {
    id: number;
    fecha: string;
    pacienteId?: number;
    motivo: string;
    sintomas?: string;
    acetpada?:boolean;

  }

  export class CreateCitaDTO {
    fecha: Date;
    pacienteId?: number;
    motivo: string;
    sintomas?: string;
    acetpada:boolean;
  }

  export class UpdateCitaDTO extends PartialType(CreateCitaDTO){}
  
  