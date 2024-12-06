import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminUsersAuthService } from '../service/admin-users-auth.service';
import { AdminUsersController } from '../backend/adminusers.controller';
import { AdminUsers } from '../entity/admin-user.entity';
import { AuthGuard } from '../guard/auth_guard';
import { AuthService } from '../service/auth.service';
@Module({
  imports: [TypeOrmModule.forFeature([AdminUsers])],
  providers: [AdminUsersAuthService,AuthGuard, AuthService],
  controllers: [AdminUsersController],
})
export class AdminUsersModule {}