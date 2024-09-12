import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder,SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // using global pipes for validation to avoid repetitioon of code
  app.useGlobalPipes(new ValidationPipe( 
    {
      whitelist:true,  //it dose not allow the data (whichis not part of DTO)to be passed to controller 
      forbidNonWhitelisted:true,//throws error if extra data is passed to request
      transform:true //makes instance of DTO so we can modifiy/edit it
    }
  ))
  const config=new DocumentBuilder()
  .setTitle("nest js blog app")
  .setDescription("waqar learning and practicing nest js")
  .addServer("http://localhost:3000")
  .setVersion('1.0').build();
  const document=SwaggerModule.createDocument(app,config)
  SwaggerModule.setup("api",app,document)
  await app.listen(3000);

}
bootstrap();
