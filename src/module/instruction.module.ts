import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstructionService } from '../service/instruction.service';
import { InstructionController } from '../backend/instruction.controller';
import { Instruction } from '../entity/instruction.entity';
import { AuthGuard } from '../guard/auth_guard';
import { AuthService } from '../service/auth.service';
@Module({
  imports: [TypeOrmModule.forFeature([Instruction])],
  providers: [InstructionService,AuthGuard, AuthService],
  controllers: [InstructionController],
})
export class InstructionModule {}