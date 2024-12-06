export declare class UploadService {
    saveImg(file: Express.Multer.File): Promise<string>;
    saveFile(file: Express.Multer.File): Promise<string>;
    getFilePath(filename: string): Promise<string>;
}
