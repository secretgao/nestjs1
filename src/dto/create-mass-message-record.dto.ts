import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsInt, Min, Max, IsNotEmpty } from 'class-validator';

export class CreateMassMessageRecordDto {

  @ApiProperty({ description: '微信群聊id' })
  @IsNotEmpty({ message: '微信群聊id不能为空' })
  @IsString({ message: '微信群聊id必须是字符串' })
  wx_id: string;

  @ApiProperty({ description: '群发消息' })
  @IsNotEmpty({ message: '群发消息不能为空' })
  @IsString({ message: '群发消息必须是字符串' })
  message?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(1)
  is_send?: number;
}