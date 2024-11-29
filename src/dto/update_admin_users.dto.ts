import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class UpdateAdminPasswordDto {

  @ApiProperty({ description: '管理员密码' })
  @IsNotEmpty({ message: '管理员密码不能为空' })
  @IsString({ message: '管理员密码必须是字符串' })
  password: string;
}
