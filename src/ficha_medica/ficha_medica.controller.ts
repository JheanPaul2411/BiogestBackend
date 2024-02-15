import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { FichaMedicaService } from './ficha_medica.service';
import { CreateFichaMedicaDto } from './dto/create-ficha_medica.dto';
import { UpdateFichaMedicaDto } from './dto/update-ficha_medica.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


@Controller('ficha-medica')
@UseGuards(JwtAuthGuard)
export class FichaMedicaController {
  constructor(private readonly fichaMedicaService: FichaMedicaService) {}

  @Post()
  create(@Body() createFichaMedicaDto: CreateFichaMedicaDto) {
    return this.fichaMedicaService.create(createFichaMedicaDto);
  }

  @Get()
  findAll() {
    return this.fichaMedicaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    /**En Javascript/Typescript, es posible convertir una cadena de texto a un número utilizando el + */
    return this.fichaMedicaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFichaMedicaDto: UpdateFichaMedicaDto) {
    return this.fichaMedicaService.update(+id, updateFichaMedicaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fichaMedicaService.remove(+id);
  }
}
