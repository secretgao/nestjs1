import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
export class UpdateAdminPasswordDto {

  @ApiProperty({ description: '管理员密码' })
  @IsString({ message: '管理员密码必须是字符串' })
  @IsOptional()
  password?: string;

  @ApiProperty({ description: '昵称' })
  @IsString({ message: '昵称' })
  @IsOptional()
  nickname?: string;

  @ApiProperty({ description: '备注' })
  @IsString({ message: '备注' })
  @IsOptional()
  remark?: string;
}
