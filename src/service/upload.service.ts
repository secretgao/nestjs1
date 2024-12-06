import { Injectable } from '@nestjs/common';
import * as path from 'path';
import { ensureDir, writeFile } from 'fs-extra';
import {promises as fs} from 'fs';
@Injectable()
export class UploadService {
  async saveImg(file: Express.Multer.File): Promise<string> {
    const uploadDir = path.join(__dirname, '..', '..', 'uploads','img');
    await ensureDir(uploadDir);
    const filePath = path.join(uploadDir, file.originalname);
    await writeFile(filePath, file.buffer);
    return filePath;
  }


  async saveFile(file: Express.Multer.File): Promise<string> {
    const uploadDir = path.join(__dirname, '..', '..', 'uploads','file');
    await ensureDir(uploadDir);
    const filePath = path.join(uploadDir, file.originalname);
    await writeFile(filePath, file.buffer);
    return filePath;
  }

  async getFilePath(filename: string): Promise<string> {
    const uploadPath = path.join(__dirname, '..', '..', 'uploads','file');
    const filePath = path.join(uploadPath, filename);
    await fs.access(filePath); // Check if file exists
    return filePath;
  }






}