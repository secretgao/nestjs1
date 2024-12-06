import { Controller, Post, Get, Res, HttpStatus, UseInterceptors, UploadedFile, HttpException, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './service/upload.service';
import { Response } from 'express';
import { ApiOperation, ApiParam } from '@nestjs/swagger';

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

  @ApiOperation({ summary: '上传图片' })
  @ApiParam({ name: 'file', description: '图片' })
  @Post('/upload_img')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImg(@UploadedFile() file: Express.Multer.File, @Res() res: Response) {
    try {
      const filePath = await this.uploadService.saveImg(file);
      const imageUrl = `/uploads/img/${file.originalname}`;
      return res.status(HttpStatus.OK).json({
        statusCode: 200,
        data: {"image_url":imageUrl,"file_path":filePath}
      });
    } catch (error) {
      throw new HttpException('File upload failed', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @ApiOperation({ summary: '上传文件' })
  @ApiParam({ name: 'file', description: '文件' })
  @Post('/upload_file')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File, @Res() res: Response) {
    try {
      const filePath = await this.uploadService.saveFile(file);
      const imageUrl = `/uploads/file/${file.originalname}`;
      return res.status(HttpStatus.OK).json({
        statusCode: 200,
        data: {"image_url":imageUrl,"file_path":filePath}
      });
    } catch (error) {
      throw new HttpException('File upload failed', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('/download/file/:filename')
  async downloadImg(@Param('filename') filename: string, @Res() res: Response) {
    try {
      const filePath = await this.uploadService.getFilePath(filename);
      return res.sendFile(filePath);
    } catch (error) {
      throw new HttpException('File not found', HttpStatus.NOT_FOUND);
    }
  }
}