import { Controller, Query,Post, Body,Get,Put,Param,Delete, UsePipes, ValidationPipe, Res, HttpStatus, HttpException, UseGuards, Logger, Patch } from '@nestjs/common';
import { InstructionAllocationService } from '../service/instruction-allocation.service';
import { CreateInstructionAllocationDto } from '../dto/create-instruction-allocation.dto';
import { Public } from '../common/auth-public';
import { AuthGuard } from '../guard/auth_guard';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';

@Controller('instruction-allocation')
export class InstructionAllocationController {
  constructor(
    private readonly InstructionAllocationService: InstructionAllocationService,
    private readonly logger:Logger     //使用日志
  ) {
    this.logger.log('instruction allocaition init')
  }
  @UseGuards(AuthGuard)
  @Get()
  @ApiOperation({ summary: '指令分配管理列表' })
  @ApiParam({ name: 'page', description: '分页' })
  @ApiParam({ name: 'limit', description: '分页' })
  @ApiParam({ name: 'customer_name', description: '客户简称' })
  @ApiParam({ name: 'allocation_number', description: '分配单号' })
  @ApiParam({ name: 'instruction_name', description: '指令名称' })
  @ApiParam({ name: 'start_time', description: '开始时间' })
  @ApiParam({ name: 'end_time', description: '结束时间' })
  findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('customer_name') customer_name?: string,
    @Query('allocation_number') allocation_number?: string,
    @Query('instruction_name') instruction_name?: string,
    @Query('start_time') start_time?: string,
    @Query('end_time') end_time?: string,
  )  {
    return this.InstructionAllocationService.findAll({ page, limit, customer_name,allocation_number,instruction_name,start_time,end_time });
  }
  @UseGuards(AuthGuard)
  @Public()
  @ApiOperation({ summary: '添加指令分配' })
  @ApiBody({description: '参数' ,type:CreateInstructionAllocationDto})
  @Post('create')
  async create(@Body() InstructionAllocationDto: CreateInstructionAllocationDto) {
    try {
      const result = await this.InstructionAllocationService.create(InstructionAllocationDto);
      return result;
    } catch (error) {
      throw new HttpException(error.message, error.status || HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
 
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe({ whitelist: true }))
  @Put(':id')
  @ApiOperation({ summary: '修改指令分配' })
  @ApiParam({ name: 'id', description: '指令ID' })
  @ApiBody({ description: '修改指令分配', type: CreateInstructionAllocationDto })
  async updateInstruction(
    @Param('id') id: number,
    @Body() InstructionAllocationDto: CreateInstructionAllocationDto,
  ) {
  
    try {
      const result = await this.InstructionAllocationService.updateInstruction(id, InstructionAllocationDto);
      return result;
    } catch (error) {
      throw new HttpException(error.message, error.status || HttpStatus.INTERNAL_SERVER_ERROR);
    }
  
  }
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: '删除分配指令' })
  @ApiParam({ name: 'id', description: '指令Id,多个逗号分割' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    const idArr = id.split(',').map(id=>parseInt(id,10));
    return this.InstructionAllocationService.remove(idArr);
  }


}