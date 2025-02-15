import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientModule } from './patient/patient.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot("mongodb+srv://admin:v3iI039d8irI8IwQ@api-db.jc0jx.mongodb.net/?retryWrites=true&w=majority&appName=api-db"), PatientModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
