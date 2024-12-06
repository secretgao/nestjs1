import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { KeywordsReply } from '../entity/keywords-reply.entity';
import { KeywordsReplyService } from '../service/keyworlds-reply.service';
import { CreateKeywordsReplyDto } from 'src/dto/create-keywords-reply.dto';

@Controller('bkeywords-reply')
export class BKeywordsReplyController {
  constructor(private readonly keywordsReplyService: KeywordsReplyService) {}

  @Get()
  findAll(): Promise<KeywordsReply[]> {
    return this.keywordsReplyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<KeywordsReply> {
    return this.keywordsReplyService.findOne(+id);
  }

  @Post()
  create(@Body() createKeywordsReplyDto: CreateKeywordsReplyDto): Promise<KeywordsReply> {
    return this.keywordsReplyService.create(createKeywordsReplyDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() keywordsReply: KeywordsReply): Promise<KeywordsReply> {
    return this.keywordsReplyService.update(+id, keywordsReply);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.keywordsReplyService.remove(+id);
  }
}