import { Injectable } from '@nestjs/common';
import { join } from 'path';
import { ensureDir, writeFile } from 'fs-extra';

@Injectable()
export class UploadService {
  async saveFile(file: Express.Multer.File): Promise<string> {
    const uploadDir = join(__dirname, '..', '..', 'uploads');
    await ensureDir(uploadDir);
    const filePath = join(uploadDir, file.originalname);
    await writeFile(filePath, file.buffer);
    return filePath;
  }
}