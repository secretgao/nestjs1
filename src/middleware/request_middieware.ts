import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { createLogger, format, transports } from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';

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

@Injectable()
export class RequestMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl, query, body } = req;
    const logMessage = `Method: ${method}, URL: ${originalUrl}, Query: ${JSON.stringify(query)}, Body: ${JSON.stringify(body)}`;
    logger.info(logMessage);
    next();
  }
}
