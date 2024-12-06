import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { KeywordsReply } from '../entity/keywords-reply.entity';
import { KeywordsReplyService } from '../service/keyworlds-reply.service';
 

@Controller('fkeywords-reply')
export class FKeywordsReplyController {
  constructor(private readonly keywordsReplyService: KeywordsReplyService) {}

  @Get()
  findAll() {
    return this.keywordsReplyService.FfindAll();
  }

   
}