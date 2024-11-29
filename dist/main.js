"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const validation_pipe_1 = require("./common/pipes/validation.pipe");
const path_1 = require("path");
const winston_1 = require("winston");
const winston = require("winston");
const nest_winston_1 = require("nest-winston");
require("winston-daily-rotate-file");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const instance = (0, winston_1.createLogger)({
        transports: [
            new winston.transports.Console({
                format: winston.format.combine(winston.format.timestamp(), nest_winston_1.utilities.format.nestLike())
            }),
            new winston.transports.DailyRotateFile({
                filename: 'application-%DATE%.log',
                dirname: './logs',
                datePattern: 'YYYY-MM-DD',
                zippedArchive: true,
                maxSize: '20m',
                maxFiles: '14d',
                format: winston.format.combine(winston.format.timestamp(), nest_winston_1.utilities.format.nestLike())
            })
        ],
    });
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: nest_winston_1.WinstonModule.createLogger({ instance })
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API 文档')
        .setDescription('API 文档描述')
        .setVersion('1.0')
        .addTag('api')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api-docs', app, document);
    app.useGlobalPipes(new validation_pipe_1.ValidationPipe());
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'uploads'), {
        prefix: '/uploads/',
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map