import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsEnum, IsString, IsUrl } from 'class-validator';

enum BloodType {
    A = 'a',
    B = 'b',
    AB = 'ab',
    O = 'o',
  }

export class CreatePatientDto {
    @ApiProperty({description: "Nombre completo del paciente", example: "Benjamín Paredes"})
    @IsNotEmpty()
    @IsString()
    name: string;
    @ApiProperty({description: "Correo electrónico del paciente", example: "benjamin@mail.com"})
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @ApiProperty({description: "Tipo de sangre del paciente", example: "O", enum: BloodType})
    @IsNotEmpty()
    @IsEnum(BloodType)
    BloodType: string;
    @ApiProperty({description: "Url del expediente del paciente", example: "www.google.com"})
    @IsNotEmpty()
    @IsUrl()
    file: string;
}
