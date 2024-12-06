import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { MessageService } from '../service/message.service';
import { CreateMessageDto } from '../dto/create-message.dto';
import { Message } from '../entity/message.entity';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';
@Controller('fmessages')
export class FMessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post('/create')
  @ApiOperation({ summary: '本地数据同步到生产接口' })
  @ApiBody({description: '参数' ,type:CreateMessageDto})
  async create(@Body() createMessageDto: CreateMessageDto): Promise<Message> {
    try {
        const message = await this.messageService.create(createMessageDto);
        return message;
      } catch (error) {
        throw new HttpException('Failed to add message', HttpStatus.INTERNAL_SERVER_ERROR);
      }
  }
}