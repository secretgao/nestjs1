"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");
exports.logger = (0, winston_1.createLogger)({
    level: 'info',
    format: winston_1.format.combine(winston_1.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
    }), winston_1.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)),
    transports: [
        new DailyRotateFile({
            filename: 'application-%DATE%.log',
            dirname: './logs',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
            level: 'info',
        }),
    ],
});
//# sourceMappingURL=request-log.js.map