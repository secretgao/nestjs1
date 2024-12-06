import { Logger } from 'typeorm';
export declare const logger: import("winston").Logger;
export declare class TypeOrmLogger implements Logger {
    logQuery(query: string, parameters?: any[]): void;
    logQueryError(error: string, query: string, parameters?: any[]): void;
    logQuerySlow(time: number, query: string, parameters?: any[]): void;
    logSchemaBuild(message: string): void;
    logMigration(message: string): void;
    log(level: 'log' | 'info' | 'warn', message: any): void;
}
