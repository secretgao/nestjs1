import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupService } from '../service/group.service';
import { FGroupController  } from '../frontend/fgroup.controller';
import { Group } from '../entity/group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Group])],
  providers: [GroupService],
  controllers: [FGroupController],
})
export class GroupModules {}