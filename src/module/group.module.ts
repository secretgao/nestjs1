import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from '../entity/group.entity';
import { WechatyService } from '../service/wechaty.service';

@Module({
  imports: [TypeOrmModule.forFeature([Group])],
  providers: [WechatyService],
  exports: [WechatyService],
})
export class GroupModule {}
