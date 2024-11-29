"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestMiddleware = exports.logger = void 0;
const common_1 = require("@nestjs/common");
const winston_1 = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");
exports.logger = (0, winston_1.createLogger)({
    level: 'info',
    format: winston_1.format.combine(winston_1.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
    }), winston_1.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)),
    transports: [
        new DailyRotateFile({
            filename: 'application-request-%DATE%.log',
            dirname: './logs',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
            level: 'info',
        }),
    ],
});
let RequestMiddleware = class RequestMiddleware {
    use(req, res, next) {
        const { method, originalUrl, query, body } = req;
        const logMessage = `Method: ${method}, URL: ${originalUrl}, Query: ${JSON.stringify(query)}, Body: ${JSON.stringify(body)}`;
        exports.logger.info(logMessage);
        next();
    }
};
exports.RequestMiddleware = RequestMiddleware;
exports.RequestMiddleware = RequestMiddleware = __decorate([
    (0, common_1.Injectable)()
], RequestMiddleware);
//# sourceMappingURL=request_middieware.js.map