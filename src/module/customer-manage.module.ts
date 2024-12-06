import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerManageService } from '../service/customer-manage.service';
import { BCustomerManageController  } from '../backend/bcustomer-manage.controller';
import { CustomerManage } from '../entity/customer_manage.entity';  
import { AuthGuard } from '../guard/auth_guard';
import { AuthService } from '../service/auth.service';
@Module({
  imports: [TypeOrmModule.forFeature([CustomerManage])],
  providers: [CustomerManageService,AuthGuard, AuthService],
  controllers: [BCustomerManageController],
})
export class CustomerManageModules {}