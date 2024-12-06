"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const upload_service_1 = require("./service/upload.service");
const typeorm_1 = require("@nestjs/typeorm");
const frontend_module_1 = require("./frontend/frontend.module");
const backend_module_1 = require("./backend/backend.module");
const config_1 = require("@nestjs/config");
const typeorm_log_1 = require("./common/typeorm-log");
const request_middieware_1 = require("./middleware/request-middieware");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(request_middieware_1.RequestMiddleware)
            .forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            frontend_module_1.FrontendModule,
            backend_module_1.BackendModule,
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    type: 'mysql',
                    host: configService.get('DATABASE_HOST'),
                    port: configService.get('DATABASE_PORT'),
                    username: configService.get('DATABASE_USERNAME'),
                    password: configService.get('DATABASE_PASSWORD'),
                    database: configService.get('DATABASE_NAME'),
                    entities: [__dirname + '/**/*.entity{.ts,.js}'],
                    synchronize: true,
                    logging: ['query', 'error', 'warn'],
                    logger: new typeorm_log_1.TypeOrmLogger(),
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, upload_service_1.UploadService, common_1.Logger],
        exports: [common_1.Logger],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map