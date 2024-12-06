import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
export declare const logger: import("winston").Logger;
export declare class RequestMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction): void;
}
