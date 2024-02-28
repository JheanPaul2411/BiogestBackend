import { PartialType } from '@nestjs/mapped-types';
import { CreateFichaMedicaDto } from './create-ficha_medica.dto';

export class UpdateFichaMedicaDto extends PartialType(CreateFichaMedicaDto) {
    
}
