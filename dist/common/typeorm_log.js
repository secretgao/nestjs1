"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmLogger = exports.logger = void 0;
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
class TypeOrmLogger {
    logQuery(query, parameters) {
        exports.logger.info(`Query: ${query} -- Parameters: ${JSON.stringify(parameters)}`);
    }
    logQueryError(error, query, parameters) {
        exports.logger.error(`Query Error: ${error} -- Query: ${query} -- Parameters: ${JSON.stringify(parameters)}`);
    }
    logQuerySlow(time, query, parameters) {
        exports.logger.warn(`Query is slow: ${time}ms -- Query: ${query} -- Parameters: ${JSON.stringify(parameters)}`);
    }
    logSchemaBuild(message) {
        exports.logger.info(`Schema Build: ${message}`);
    }
    logMigration(message) {
        exports.logger.info(`Migration: ${message}`);
    }
    log(level, message) {
        switch (level) {
            case 'log':
                exports.logger.info(message);
                break;
            case 'info':
                exports.logger.info(message);
                break;
            case 'warn':
                exports.logger.warn(message);
                break;
        }
    }
}
exports.TypeOrmLogger = TypeOrmLogger;
//# sourceMappingURL=typeorm_log.js.map