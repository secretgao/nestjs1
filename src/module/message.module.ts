import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageService } from '../service/message.service';
import { FMessageController } from '../frontend/fmessage.controller';
import { Message } from '../entity/message.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  providers: [MessageService,],
  controllers: [FMessageController],
})
export class MessageModules {}