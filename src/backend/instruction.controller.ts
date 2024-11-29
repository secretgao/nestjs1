import { Controller, Query,Post, Body,Get,Put,Param,Delete, UsePipes, ValidationPipe, Res, HttpStatus, HttpException, UseGuards, Logger } from '@nestjs/common';
import { Response } from 'express';
import { InstructionService } from '../service/instruction.service';
import { CreateInstructionDto } from '../dto/create_instruction.dto';
import { PaginationDto } from '../dto/pagination.dto';
import { ParseIntPipe } from '../common/pipes/parse-int-pipe';
import { DefaultValuePipe } from '@nestjs/common/pipes';
import { Public } from '../common/auth_public';
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
  
  @Public()
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
 
  //@UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe({ whitelist: true }))
  @Put(':id')
  @ApiOperation({ summary: '修改指令' })
  @ApiParam({ name: 'id', description: '指令ID' })
  @ApiBody({ description: '修改指令', type: CreateInstructionDto })
  async updateAdmin(
    @Param('id') id: string,
    @Body() InstructionDto: CreateInstructionDto,
  ) {
  
    try {
      const result = await this.InstructionService.updateInstruction(id, InstructionDto);
      return result;
    } catch (error) {
      throw new HttpException(error.message, error.status || HttpStatus.INTERNAL_SERVER_ERROR);
    }
  
  }
}