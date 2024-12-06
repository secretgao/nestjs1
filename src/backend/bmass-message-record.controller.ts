import { Controller, Get, Post, Body, Put, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { MassMessageRecordService } from '../service/masss-message-record.service';
import { CreateMassMessageRecordDto } from 'src/dto/create-mass-message-record.dto';
import { ApiBody, ApiOperation, ApiParam } from '@nestjs/swagger';

@Controller('bmass-message-record')
export class BMassMessageRecordController {
  constructor(private readonly MassMessageRecordService: MassMessageRecordService) {}

  @Get('/index')
  @ApiOperation({ summary: '群发任务列表' })
  findAll()  {
    return this.MassMessageRecordService.findAll();
  }

 
  @Post('/create-mass-message')
  @ApiOperation({ summary: '创建微信群发任务' })
  @ApiBody({ description: '创建微信群发任务', type: CreateMassMessageRecordDto })
  async create(@Body() CreateMassMessageRecordDto: CreateMassMessageRecordDto)  {
    try {
      const result = await this.MassMessageRecordService.create(CreateMassMessageRecordDto);
      return result;
    } catch (error) {
      throw new HttpException(error.message, error.status || HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  
}