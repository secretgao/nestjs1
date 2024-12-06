import { Module } from '@nestjs/common';
import { AdminUsersModule } from '../module/admin-users.module';
import { InstructionModule } from '../module/instruction.module';
import { KeywordsReplyModule } from '../module/keywords-reply.module';
import { MassMessageRecordModules } from '../module/mass-message-record.module';
import { CustomerManageModules } from '../module/customer-manage.module';
import { InstructionAllocationModule } from '../module/instruction-allocation.module';
@Module({
  imports: [
    AdminUsersModule,
    InstructionModule,
    KeywordsReplyModule,
    MassMessageRecordModules,
    CustomerManageModules,
    InstructionAllocationModule
  ],
  providers: [],
})
export class BackendModule {}