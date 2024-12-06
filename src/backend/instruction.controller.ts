import { Controller, Query,Post, Body,Get,Put,Param,Delete, UsePipes, ValidationPipe, Res, HttpStatus, HttpException, UseGuards, Logger, Patch } from '@nestjs/common';
import { InstructionService } from '../service/instruction.service';
import { CreateInstructionDto } from '../dto/create-instruction.dto';
import { Public } from '../common/auth-public';
import { AuthGuard } from '../guard/auth_guard';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';

@Controller('instruction')
export class InstructionController {
  constructor(
    private readonly InstructionService: InstructionService,
    private readonly logger:Logger     //使用日志
  ) {
    this.logger.log('instruction init')
  }
  @UseGuards(AuthGuard)
  @Get()
  @ApiOperation({ summary: '指令管理列表' })
  @ApiParam({ name: 'page', description: '分页' })
  @ApiParam({ name: 'limit', description: '分页' })
  @ApiParam({ name: 'name', description: 'name' })
  @ApiParam({ name: 'code', description: '标识码' })
  @ApiParam({ name: 'admin_name', description: '创建人' })
  @ApiParam({ name: 'start_time', description: '开始时间' })
  @ApiParam({ name: 'end_time', description: '结束时间' })
  @ApiParam({ name: 'id', description: 'Id' })
  @ApiParam({ name: 'is_open', description: ' 状态 1启用0禁用' })
  findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('name') name?: string,
    @Query('code') code?: string,
    @Query('id') id?: number,
    @Query('is_open') is_open?: number,
    @Query('admin_name') admin_name?: string,
    @Query('start_time') start_time?: string,
    @Query('end_time') end_time?: string,
  )  {
    return this.InstructionService.findAll({ page, limit, name, code,id, is_open,admin_name,start_time,end_time });
  }

  @UseGuards(AuthGuard)
  @Get('/get-instruction')
  @ApiOperation({ summary: '获取可用的指令列表' })
  findAllByIsOpen()  {
    return this.InstructionService.findAllByIsOpen();
  }
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: '添加指令' })
  @ApiBody({description: '参数' ,type:CreateInstructionDto})
  @Post('create')
  async create(@Body() InstructionDto: CreateInstructionDto) {
    try {
      const result = await this.InstructionService.create(InstructionDto);
      return result;
    } catch (error) {
      throw new HttpException(error.message, error.status || HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
 
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe({ whitelist: true }))
  @Put(':id')
  @ApiOperation({ summary: '修改指令' })
  @ApiParam({ name: 'id', description: '指令ID' })
  @ApiBody({ description: '修改指令', type: CreateInstructionDto })
  async updateInstruction(
    @Param('id') id: number,
    @Body() InstructionDto: CreateInstructionDto,
  ) {
  
    try {
      const result = await this.InstructionService.updateInstruction(id, InstructionDto);
      return result;
    } catch (error) {
      throw new HttpException(error.message, error.status || HttpStatus.INTERNAL_SERVER_ERROR);
    }
  
  }
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: '删除指令' })
  @ApiParam({ name: 'id', description: '指令Id,多个逗号分割' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    const idArr = id.split(',').map(id=>parseInt(id,10));
    return this.InstructionService.remove(idArr);
  }
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: '修改指令状态' })
  @ApiParam({ name: 'id', description: '指令Id' })
  @ApiParam({ name: 'is_open', description: ' 指令状态 1启用0禁用' })
  @Patch(':id/is_open')
  updateStatus(@Param('id') id: string, @Body('is_open') is_open: number) {
    const parseId = parseInt(id,10);
    return this.InstructionService.updateStatus(parseId, is_open);
  }


 
}