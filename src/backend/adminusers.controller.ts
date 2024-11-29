import { Controller, Query,Post, Body,Get,Put,Param,Delete, UsePipes, ValidationPipe, Res, HttpStatus, HttpException, UseGuards, Logger } from '@nestjs/common';
import { Response } from 'express';
import { AdminUsersAuthService } from '../service/admin_users_auth.service';
import { CreateAdminUserDto } from '../dto/admin_users.dto';
import { PaginationDto } from '../dto/pagination.dto';
import { ParseIntPipe } from '../common/pipes/parse-int-pipe';
import { DefaultValuePipe } from '@nestjs/common/pipes';
import { Public } from '../common/auth_public';
import { AuthGuard } from '../guard/auth_guard';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';
import { UpdateAdminPasswordDto } from 'src/dto/update_admin_users.dto';

@Controller('admin_users')
export class AdminUsersController {
  constructor(
    private readonly AdminUsersAuthService: AdminUsersAuthService,
    private readonly logger:Logger     //使用日志
  ) {
    this.logger.log('admin init')
  }
  
  @Public()
  @ApiOperation({ summary: '注册管理员' })
  @ApiBody({description: '参数' ,type:CreateAdminUserDto})
  @Post('register')
  async register(@Body() adminUsersDto: CreateAdminUserDto) {
    try {
      const result = await this.AdminUsersAuthService.register(adminUsersDto);
      return result;
    } catch (error) {
      throw new HttpException(error.message, error.status || HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Public()
  @ApiOperation({ summary: '管理员登陆' })
  @ApiBody({description: '参数' ,type:CreateAdminUserDto})
  @Post('login')
  async login(@Body() adminUsersDto: CreateAdminUserDto) {
    
    try {
      const token = await this.AdminUsersAuthService.login(adminUsersDto);
      if (token) {
        this.logger.log('login get token')
        this.logger.log(token);
        return { token };
      } else {
        throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
  //@UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe({ whitelist: true }))
  @Put(':id')
  @ApiOperation({ summary: '修改管理员密码' })
  @ApiParam({ name: 'id', description: '管理员用户ID' })
  @ApiBody({ description: '修改管理员密码', type: UpdateAdminPasswordDto })
  async updateAdmin(
    @Param('id') id: string,
    @Body() UpdateAdminPasswordDto: UpdateAdminPasswordDto,
  ) {
  
    try {
      const result = await this.AdminUsersAuthService.updateAdminPassword(id, UpdateAdminPasswordDto);
      return result;
    } catch (error) {
      throw new HttpException(error.message, error.status || HttpStatus.INTERNAL_SERVER_ERROR);
    }
  
  }
}