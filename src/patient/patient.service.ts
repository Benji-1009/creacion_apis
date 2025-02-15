import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Patient } from './entities/patient.entity';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';

@Injectable()
export class PatientService {
  constructor(@InjectModel(Patient.name) private patientModel: Model<Patient>,
  private readonly httpservice : HttpService
) {}
private url = "https://pokeapi.co/api/v2/pokemon/"
pokemon (name: string){
  try{
    return this.httpservice.get(this.url + "/" + name).pipe(map(res => this.pokemonHelper(res.data)))
  }
  catch (error){console.log(error)
    return error
  }
}
pokemonHelper (data:any) {
  return {
    name: data.name,
    id: data.order,
    types: data.types
  }
}
  create(createPatientDto: CreatePatientDto) {
    const patient = new this.patientModel(createPatientDto);
    return patient.save();
  }

  findAll() {
    return this.patientModel.find().exec();
  }

  findOne(id: string) {
    return this.patientModel.findById(id).exec();
  }

  update(id: string, updatePatientDto: UpdatePatientDto) {
    return this.patientModel.findByIdAndUpdate(id,updatePatientDto).exec();
  }

  remove(id: string) {
    return this.patientModel.findByIdAndDelete(id).exec();
  }
}
