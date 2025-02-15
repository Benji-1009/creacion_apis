import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';
import { MongooseModule} from '@nestjs/mongoose';
import { Patient, PatientSchema } from './entities/patient.entity';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [MongooseModule.forFeature([{ name: Patient.name, schema: PatientSchema }]),HttpModule],
  controllers: [PatientController],
  providers: [PatientService],
})
export class PatientModule {}
