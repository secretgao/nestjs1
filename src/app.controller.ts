import { Controller, Post, Get, Res, HttpStatus, UseInterceptors, UploadedFile, HttpException } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './service/upload.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly uploadService: UploadService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File, @Res() res: Response) {
    try {
      const filePath = await this.uploadService.saveFile(file);
      const imageUrl = `/uploads/${file.originalname}`;
      return res.status(HttpStatus.OK).json({
        statusCode: 200,
        data: {"image_url":imageUrl,"file_path":filePath}
      });
    } catch (error) {
      throw new HttpException('File upload failed', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}