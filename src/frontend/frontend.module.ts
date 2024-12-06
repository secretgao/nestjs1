import { Module } from '@nestjs/common';

import { MessageModules } from '../module/message.module';
import { GroupModules } from '../module/group.module';
@Module({
  imports: [MessageModules,GroupModules],
})
export class FrontendModule {}