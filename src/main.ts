import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './common/pipes/validation.pipe';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { createLogger } from 'winston';
import *  as winston from 'winston';
import { utilities, WinstonLogger, WinstonModule } from 'nest-winston';
import 'winston-daily-rotate-file';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {

  const instance = createLogger({
      transports:[
        new winston.transports.Console({
          //level:'info',
          format:winston.format.combine(
            winston.format.timestamp(),
            utilities.format.nestLike(),
          )
        }),
        new winston.transports.DailyRotateFile({
         // level:'warn',
          filename: 'application-%DATE%.log',
          dirname: './logs',
          datePattern: 'YYYY-MM-DD',
          zippedArchive: true,
          maxSize: '20m',
          maxFiles: '14d',
          format:winston.format.combine(
            winston.format.timestamp(),
            utilities.format.nestLike(),
          )
        })
      ],

  });
 
  const app = await NestFactory.create<NestExpressApplication>(AppModule,{
    logger: WinstonModule.createLogger({instance})
  });
  //Swagger 
  const config = new DocumentBuilder()
    .setTitle('API 文档')
    .setDescription('API 文档描述')
    .setVersion('1.0')
    .addTag('api')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  app.useGlobalPipes(new ValidationPipe());
 
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads/',
  });



  await app.listen(3000);
}
bootstrap();
