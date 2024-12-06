import { IsNotEmpty, IsNumber, IsString ,IsOptional,IsInt,Min,Max,IsDate} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class  SendGroupMessageDto {
  @ApiProperty({ description: '发送的消息' })
  @IsNotEmpty({ message: '发送的消息不能为空' })
  @IsString({ message: '发送的消息必须是字符串' })
  message: string;

  @ApiProperty({ description: '群ID' })
  @IsNotEmpty({ message: '群ID不能为空' })
  @IsString({ message: '群ID必须是字符串' })
  roomId: string;
}