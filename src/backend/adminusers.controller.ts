import { Controller, Query,Post, Body,Get,Put,Param,Delete, UsePipes, ValidationPipe, Res, HttpStatus, HttpException, UseGuards, Logger, Patch } from '@nestjs/common';
import { AdminUsersAuthService } from '../service/admin-users-auth.service';
import { CreateAdminUserDto, LoginAdminUserDto } from '../dto/create-admin-users.dto';

import { Public } from '../common/auth-public';
import { AuthGuard } from '../guard/auth_guard';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';
import { UpdateAdminPasswordDto } from 'src/dto/update-admin-users.dto';
import { request } from 'http';
import { User } from '../decorator/user.decorator';
import { ApiResponseReturn } from '../common/api-response-return';
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
  @Post('/create')
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
  @ApiBody({description: '参数' ,type:LoginAdminUserDto})
  @Post('/login')
  async login(@Body() adminUsersDto: LoginAdminUserDto) {
    
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
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: '重置密码' })
  @ApiBody(
    {schema: {
        type: 'object',
        properties: {
          id: {
            type: 'array',
            items:{type:'number'},
            description: ' 客户id, 多个逗号分割    [1,2,3,4]',
          },
        },
        required: ['id'],
      },
    })
  @Post('/init-password')
  initPassword(@Body('id') id: number) {
    return this.AdminUsersAuthService.initPassword(id);
  }

  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe({ whitelist: true }))
  @Put(':id')
  @ApiOperation({ summary: '修改管理员信息' })
  @ApiParam({ name: 'id', description: '管理员用户ID' })
  @ApiBody({ description: '修改管理员信息', type: UpdateAdminPasswordDto })
  async updateAdmin(
    @Param('id') id: number,
    @Body() UpdateAdminPasswordDto: UpdateAdminPasswordDto,
  ) {
    try {
      const result = await this.AdminUsersAuthService.updateAdminPassword(id, UpdateAdminPasswordDto);
      return result;
    } catch (error) {
      throw new HttpException(error.message, error.status || HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @UseGuards(AuthGuard)
  @Get('index')
  @ApiOperation({ summary: '账号管理' })
  @ApiParam({ name: 'page', description: '分页' })
  @ApiParam({ name: 'limit', description: '分页' })
  @ApiParam({ name: 'username', description: '账号' })
  @ApiParam({ name: 'status', description: '账号状态' })
  @ApiParam({ name: 'id', description: 'id' })
  findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('username') username?: string,
    @Query('id') id?: number,
    @Query('status') status?: number,
  )  {
    return this.AdminUsersAuthService.findAll({ page, limit, username,id,status});
  }


  @UseGuards(AuthGuard)
  @Get('info')
  @ApiOperation({ summary: '个人信息' })
  findinfo(@User() user:any)  {
    return new ApiResponseReturn(HttpStatus.OK, '获取成功',{ user });
  }
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: '删除管理员' })
  @ApiParam({ name: 'id', description: '管理员Id,多个逗号分割' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    const idArr = id.split(',').map(id=>parseInt(id,10));
    return this.AdminUsersAuthService.remove(idArr);
  }
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: '修改管理员状态' })
  @ApiParam({ name: 'id', description: '管理员Id' })
  @ApiParam({ name: 'status', description: ' 管理员状态 1启用0禁用' })
  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body('status') status: number) {
    const parseId = parseInt(id,10);
    return this.AdminUsersAuthService.updateStatus(parseId, status);
  }

}