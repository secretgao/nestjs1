import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, IsDateString, IsNotEmpty } from 'class-validator';

export class CreateInstructionAllocationDto {
  @ApiProperty({ description: '客户id' })
  @IsNotEmpty({ message: '客户id不能为空' })
  @IsInt({ message: '客户id必须是数字' })
  customer_id: number;

  @ApiProperty({ description: '客户简称' })
  @IsNotEmpty({ message: '客户简称不能为空' })
  @IsString({ message: '客户简称必须是字符串' })
  customer_name: string;

  @ApiProperty({ description: '指令id' })
  @IsNotEmpty({ message: '指令id不能为空' })
  @IsInt({ message: '指令id必须是数字' })
  instruction_id: number;

  @ApiProperty({ description: '指令名称' })
  @IsNotEmpty({ message: '指令名称不能为空' })
  @IsString({ message: '指令名称必须是字符串' })
  instruction_name: string;

  @ApiProperty({ description: '指令开始时间' })
  @IsNotEmpty({ message: '指令开始时间不能为空' })
  @IsString({ message: '指令开始时间必须是字符串' })
  start_time: string;

  
  @ApiProperty({ description: '指令结束时间' })
  @IsNotEmpty({ message: '指令结束时间不能为空' })
  @IsString({ message: '指令结束时间必须是字符串' })
  end_time: string;

  @IsOptional()
  @IsDateString()
  created_at?: Date;

  @IsOptional()
  @IsString()
  remark?: string;

  @IsOptional()
  @IsString()
  admin_name?: string;

  @IsOptional()
  @IsInt()
  admin_id?: number;
}
