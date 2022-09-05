import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { bootstrapEnvironmentVariables } from './bootstrap';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Crud API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/', app, document);

  const logger = new Logger('Bootstrap');

  const port = process.env.PORT || 3000;

  logger.log(`CRUD Application starting using port ${port}`);
  logger.log('Swagger Documentation available at /');
  await app.listen(3000);
}
bootstrapEnvironmentVariables();
bootstrap();
