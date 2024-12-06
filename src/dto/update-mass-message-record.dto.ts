import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, Min, Max, IsNotEmpty } from 'class-validator';

export class UpdateMassMessageRecordDto {
  @ApiProperty({ description: '微信群聊id' })
  @IsNotEmpty({ message: '微信群聊id不能为空' })
  @IsString({ message: '微信群聊id必须是字符串' })
  wx_id: string;
   
  @ApiProperty({ description: '发送成功状态' })
  @IsNotEmpty({ message: '发送成功状态不能为空' })
  @IsInt({ message: '发送成功状态类型是整型' })
  @Min(0)
  @Max(1)
  is_send: number;
}