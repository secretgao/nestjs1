import { IsNotEmpty, IsNumber, IsString ,IsOptional,IsInt,Min,Max,IsDate} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateInstructionDto {
  @ApiProperty({ description: '指令名称' })
  @IsNotEmpty({ message: '指令名称不能为空' })
  @IsString({ message: '管指令名称必须是字符串' })
  name: string;

  @ApiProperty({ description: '指令版本号' })
  @IsNotEmpty({ message: '指令版本号不能为空' })
  @IsString({ message: '指令版本号必须是字符串' })
  version: string;


  @ApiProperty({ description: '触发方式' })
  @IsNotEmpty({ message: '触发方式不能为空' })
  @IsString({ message: '触发方式必须是字符串' })
  trigger_mode:string;


  @ApiProperty({ description: '开关 1开0关' })
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(1)
  is_open:number;

  @ApiProperty({ description: '创建时间' })
  @IsOptional()
  @IsDate()
  created_at?: Date;

  @ApiProperty({ description: '到期时间' })
  @IsDate()
  expire_at: Date;

  @IsOptional()
  @IsDate()
  updated_at?: Date;
}