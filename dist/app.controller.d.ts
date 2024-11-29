import { AppService } from './app.service';
import { UploadService } from './service/upload.service';
import { Response } from 'express';
export declare class AppController {
    private readonly appService;
    private readonly uploadService;
    constructor(appService: AppService, uploadService: UploadService);
    getHello(): string;
    uploadFile(file: Express.Multer.File, res: Response): Promise<Response<any, Record<string, any>>>;
}
