import { Module } from '@nestjs/common';
import { AdminUsersModule } from '../module/admin_users.module';
import { InstructionModule } from '../module/instruction.module';
import { WechatyModule } from '../module/wechaty.module';
@Module({
  imports: [
    AdminUsersModule,
    InstructionModule,
    WechatyModule
  ],
  providers: [],
})
export class BackendModule {}