import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstructionAllocationService } from '../service/instruction-allocation.service';
import { InstructionAllocationController } from '../backend/instruction-allocation.controller';
import { InstructionAllocation } from '../entity/instruction_allocation.entity';
import { AuthGuard } from '../guard/auth_guard';
import { AuthService } from '../service/auth.service';
@Module({
  imports: [TypeOrmModule.forFeature([InstructionAllocation])],
  providers: [InstructionAllocationService,AuthGuard, AuthService],
  controllers: [InstructionAllocationController],
})
export class InstructionAllocationModule {}