import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsEnum, IsString, IsUrl, IsOptional } from 'class-validator';

enum BloodType {
    A = 'a',
    B = 'b',
    AB = 'ab',
    O = 'o',
  }

export class UpdatePatientDto {
    @ApiProperty({description: "Nombre completo del paciente", example: "Benjamín Paredes"})
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    name: string;
    @ApiProperty({description: "Correo electrónico del paciente", example: "benjamin@mail.com"})
    @IsOptional()
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @ApiProperty({description: "Tipo de sangre del paciente", example: "O", enum: BloodType})
    @IsOptional()
    @IsNotEmpty()
    @IsEnum(BloodType)
    BloodType: string;
    @ApiProperty({description: "Url del expediente del paciente", example: "www.google.com"})
    @IsOptional()
    @IsNotEmpty()
    @IsUrl()
    file: string;
}
