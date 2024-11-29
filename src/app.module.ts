import { Module ,Logger, Global, NestModule, MiddlewareConsumer} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadService } from './service/upload.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FrontendModule } from './frontend/frontend.module';
import { BackendModule } from './backend/backend.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {TypeOrmLogger} from './common/typeorm_log'
import { RequestMiddleware } from './middleware/request_middieware';
import { WechatyService } from './service/wechaty.service';

@Global() 
@Module({
  imports: [ 
     FrontendModule,
     BackendModule,
     ConfigModule.forRoot({
      envFilePath : '.env', // 指定 .env 文件路径
      isGlobal: true, // 如果希望在整个应用程序中全局使用配置模块
    }), 
    // npm install @hapi/joi @nestjs/config  使用joi 对env 文件中的配置类型进行判断

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USERNAME'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true, // 请勿在生产环境中使用
        logging: ['query', 'error', 'warn'], // 启用日志记录
        logger: new TypeOrmLogger(),
      }),
      inject: [ConfigService],
    }),
    ],
    
  controllers: [AppController],
  providers: [AppService,UploadService,Logger,WechatyService],
  exports:[Logger,WechatyService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RequestMiddleware)
      .forRoutes('*');  // 为所有路由应用中间件
  }
}
