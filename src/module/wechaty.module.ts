import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstructionService } from '../service/instruction.service';
import { WechatyController } from '../backend/wechaty.controller';
import { Instruction } from '../entity/instruction.entity';
import { Group } from '../entity/group.entity';
import { AuthGuard } from '../guard/auth_guard';
import { AuthService } from '../service/auth.service';
import { WechatyService } from 'src/service/wechaty.service';
import { GroupService } from 'src/service/group.service';
@Module({
  imports: [TypeOrmModule.forFeature([Instruction,Group])],
  providers: [InstructionService,AuthGuard, AuthService,WechatyService,GroupService],
  controllers: [WechatyController],
})
export class WechatyModule {}