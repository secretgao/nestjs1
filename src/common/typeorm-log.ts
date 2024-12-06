import { Logger } from 'typeorm';
import { createLogger, format } from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';
/**
 * 定义 sql 日志输入格式
 */
export const logger = createLogger({
    level: 'info',
    format: format.combine(
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
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
export class TypeOrmLogger implements Logger {
  logQuery(query: string, parameters?: any[]) {
    logger.info(`Query: ${query} -- Parameters: ${JSON.stringify(parameters)}`);
  }

  logQueryError(error: string, query: string, parameters?: any[]) {
    logger.error(`Query Error: ${error} -- Query: ${query} -- Parameters: ${JSON.stringify(parameters)}`);
  }

  logQuerySlow(time: number, query: string, parameters?: any[]) {
    logger.warn(`Query is slow: ${time}ms -- Query: ${query} -- Parameters: ${JSON.stringify(parameters)}`);
  }

  logSchemaBuild(message: string) {
    logger.info(`Schema Build: ${message}`);
  }

  logMigration(message: string) {
    logger.info(`Migration: ${message}`);
  }

  log(level: 'log' | 'info' | 'warn', message: any) {
    switch (level) {
      case 'log':
        logger.info(message);
        break;
      case 'info':
        logger.info(message);
        break;
      case 'warn':
        logger.warn(message);
        break;
    }
  }
}
