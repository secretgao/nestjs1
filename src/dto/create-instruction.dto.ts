import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateInstructionDto {
  @ApiProperty({ description: '指令名称' })
  @IsNotEmpty({ message: '指令名称不能为空' })
  @IsString({ message: '指令名称必须是字符串1' })
  name: string;

  @ApiProperty({ description: '开关 1开0关' })
  @IsOptional()
  @IsInt()
  is_open: number = 0;

  @ApiProperty({ description: '指令码' })
  @IsNotEmpty({ message: '指令码不能为空' })
  @IsString({ message: '指令码必须是字符串' })
  code: string;

  @IsOptional()
  @IsString()
  admin_name?: string;

  @IsOptional()
  @IsInt()
  admin_id?: number;
}