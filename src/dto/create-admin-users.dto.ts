import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateAdminUserDto {
  @ApiProperty({ description: '管理员帐号' })
  @IsNotEmpty({ message: '管理员帐号不能为空' })
  @IsString({ message: '管理员帐号必须是字符串' })
  username: string;

  @ApiProperty({ description: '管理员密码' })
 // @IsNotEmpty({ message: '管理员密码不能为空' })
  @IsString({ message: '管理员密码必须是字符串' })
  password?: string;

  @ApiProperty({ description: '用户昵称' })
  @IsNotEmpty({ message: '用户昵称不能为空' })
  @IsString({ message: '用户昵称必须是字符串' })
  nickname: string;

  @ApiProperty({ description: '备注' })
  remark: string;
}

export class LoginAdminUserDto {
  @ApiProperty({ description: '管理员帐号' })
  @IsNotEmpty({ message: '管理员帐号不能为空' })
  @IsString({ message: '管理员帐号必须是字符串' })
  username: string;

  @ApiProperty({ description: '管理员密码' })
  @IsNotEmpty({ message: '管理员密码不能为空' })
  @IsString({ message: '管理员密码必须是字符串' })
  password: string;
 
}