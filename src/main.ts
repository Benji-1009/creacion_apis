import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder().setTitle("API Pacientes").setDescription("Servicio para gestionar los servicios de pacientes").setVersion("0.2").addTag("patient")
.build();
const documentFactory = () => SwaggerModule.createDocument(app,config);
SwaggerModule.setup("api",app,documentFactory);  
await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
