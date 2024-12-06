import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { MassMessageRecordService } from '../service/masss-message-record.service';
import { UpdateMassMessageRecordDto } from 'src/dto/update-mass-message-record.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('fmass-message-record')
export class fMassMessageRecordController {
  constructor(private readonly MassMessageRecordService: MassMessageRecordService) {}

  @Get('/unsend-message-record')
  @ApiOperation({ summary: '获取未完成群发的消息任务' })
  findAll() {
    return this.MassMessageRecordService.findUnSendMessage();
  }

  @Post('/send_success_callback')
  @ApiOperation({ summary: '发送成功的消息更新成成功' })
  async update(@Body() updateMassMessageRecordDto: UpdateMassMessageRecordDto) {
    return this.MassMessageRecordService.update(updateMassMessageRecordDto);
  }

}