import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { UserGuard } from 'src/user/user.guard';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}
  @ApiOperation({summary: "Dar de alta un nuevo paciente"})
  @ApiCreatedResponse({description: "Paciente creado con éxito"})
  @ApiBadRequestResponse({description: "Error al hacer la petición"})
  @Post()
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientService.create(createPatientDto);
  }
  @UseGuards(UserGuard)
  @ApiOperation({summary: "Enlistar todos los pacientes existentes"})
  @ApiOkResponse()
  @Get()
  findAll() {
    return this.patientService.findAll();
  }
  @ApiOperation({summary: "Encontrar un paciente específico"})
  @ApiBadRequestResponse({description: "Error al hacer la petición"})
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientService.findOne(id);
  }
  @ApiOperation({summary: "Actualizar un paciente"})
  @ApiBadRequestResponse({description: "Error al hacer la petición"})
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientService.update(id, updatePatientDto);
  }
  @ApiOperation({summary: "Eliminar un paciente"})
  @ApiBadRequestResponse({description: "Error al hacer la petición"})
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientService.remove(id);
  }
  @Get('pokemon/:name')
  pokemon(@Param('name') name: string) {
    return this.patientService.pokemon(name);
  }
}
