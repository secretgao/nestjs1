import { Controller, Query,Post, Body,Get,Param, UsePipes, ValidationPipe, HttpStatus, HttpException, Logger } from '@nestjs/common';
import { GroupService } from '../service/group.service';
import { PaginationDto } from '../dto/pagination.dto';
import { SendGroupMessageDto } from '../dto/send_group_message.dto';
import { DefaultValuePipe } from '@nestjs/common/pipes';
import { Public } from '../common/auth_public';
import { AuthGuard } from '../guard/auth_guard';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';

@Controller('group')
export class GroupController {
  constructor(
    private readonly GroupService: GroupService,
    private readonly logger:Logger     //使用日志
  ) {
    this.logger.log('group init')
  }
  
  @Public()
  @ApiOperation({ summary: '获取群组列表-从数据库查询' })
  @Get('list')
  async list(PaginationDto) {
    try {
      const result = await this.GroupService.findAll(PaginationDto);
      return result;
    } catch (error) {
      throw new HttpException(error.message, error.status || HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Public()
  @ApiOperation({ summary: '群组发送消息' })
  @ApiBody({description: '参数' ,type:SendGroupMessageDto})
  @Get('push_message')
  async sendGroupMessage(@Body() SendGroupMessageDto: SendGroupMessageDto) {
    
    try {
      const token = await this.GroupService.sendGroupMessage(SendGroupMessageDto);   
      return { token };   
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
 
}