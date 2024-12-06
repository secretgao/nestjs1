import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeywordsReply } from '../entity/keywords-reply.entity';
import { KeywordsReplyService } from '../service/keyworlds-reply.service';
import { BKeywordsReplyController } from '../backend/bkeywords-reply.controller';
import { FKeywordsReplyController } from '../frontend/fkeywords-reply.controller';
@Module({
  imports: [TypeOrmModule.forFeature([KeywordsReply])],
  providers: [KeywordsReplyService],
  controllers: [BKeywordsReplyController,FKeywordsReplyController]
})
export class KeywordsReplyModule {}