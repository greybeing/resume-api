import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './modules/app.module';
import * as cors from 'cors'; // Import cors function
import { NestExpressApplication } from '@nestjs/platform-express';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  // Use CORS middleware
  app.use(cors( {

  } ));

  const config = new DocumentBuilder()
  .setTitle('NestJS Swagger')
  .setDescription('API description')
  .setVersion('1.0')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

  await app.listen(AppModule.port);
}
bootstrap();
