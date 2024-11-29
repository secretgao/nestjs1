import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateAdminUserDto {
  @ApiProperty({ description: '管理员帐号' })
  @IsNotEmpty({ message: '管理员帐号不能为空' })
  @IsString({ message: '管理员帐号必须是字符串' })
  username: string;

  @ApiProperty({ description: '管理员密码' })
  @IsNotEmpty({ message: '管理员密码不能为空' })
  @IsString({ message: '管理员密码必须是字符串' })
  password: string;
}