import { Controller, Get, Post, Body, Param, Delete, Put, Query, Patch, UseGuards } from '@nestjs/common';
import { CustomerManageService } from '../service/customer-manage.service';
import { CustomerManage } from '../entity/customer_manage.entity';  
import { CreateCustomerManageDto } from '../dto/create-customer-manage.dto';
import { UpdateCustomerManageDto } from '../dto/update-customer-manage.dto';
import { ApiBody, ApiOperation, ApiParam } from '@nestjs/swagger';
import { AuthGuard } from '../guard/auth_guard';
@Controller('bcustomer-manage')
export class BCustomerManageController {
  constructor(private readonly customerManageService: CustomerManageService) {}
  @UseGuards(AuthGuard)
  @Get()
  @ApiOperation({ summary: '客户管理列表' })
  @ApiParam({ name: 'page', description: '分页' })
  @ApiParam({ name: 'limit', description: '分页' })
  @ApiParam({ name: 'abbreviation', description: '客户简称' })
  @ApiParam({ name: 'id', description: '客户Id' })
  @ApiParam({ name: 'status', description: ' 客户状态 1启用0禁用' })
  findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('abbreviation') abbreviation?: string,
    @Query('id') id?: number,
    @Query('status') status?: string,
  )  {
    return this.customerManageService.findAll({ page, limit, abbreviation, id, status });
  }

  @UseGuards(AuthGuard)
  @ApiOperation({ summary: '创建客户' })
  @ApiBody({ description: '创建客户', type: CreateCustomerManageDto })
  @Post()
  create(@Body() createCustomerManageDto: CreateCustomerManageDto)  {
    return this.customerManageService.create(createCustomerManageDto);
  }
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: '编辑客户' })
  @ApiBody({ description: '编辑客户', type: UpdateCustomerManageDto })
  @Put(':id')
  update(@Param('id') id: number, @Body() updateCustomerManageDto: UpdateCustomerManageDto) {
    return this.customerManageService.update(id, updateCustomerManageDto);
  }
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: '删除客户' })
  @ApiParam({ name: 'id', description: '客户Id,多个逗号分割' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    const idArr = id.split(',').map(id=>parseInt(id,10));
    return this.customerManageService.remove(idArr);
  }
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: '修改客户状态' })
  @ApiParam({ name: 'id', description: '客户Id' })
  @ApiParam({ name: 'status', description: ' 客户状态 1启用0禁用' })
  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body('status') status: number) {
    const parseId = parseInt(id,10);
    return this.customerManageService.updateStatus(parseId, status);
  }
  @UseGuards(AuthGuard)
  @Get('/get-customer')
  @ApiOperation({ summary: '获取可用的客户列表' })
  findAllByStatus()  {
    return this.customerManageService.findAllByStatus();
  }
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: '初始化密码' })
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
    return this.customerManageService.initPassword(id);
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number): Promise<CustomerManage> {
    return this.customerManageService.findOne(id);
  }

}