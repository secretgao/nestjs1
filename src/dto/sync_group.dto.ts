import { IsNotEmpty, IsNumber, IsString ,IsOptional,IsInt,Min,Max,IsDate} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class SyncGroupDto {
  @ApiProperty({ description: '微信群组Id' })
  @IsNotEmpty({ message: '微信群组Id不能为空' })
  @IsString({ message: '微信群组Id必须是字符串' })
  roomId: string;

  @ApiProperty({ description: '微信群组名称' })
  @IsNotEmpty({ message: '微信群组名称不能为空' })
  @IsString({ message: '微信群组名称必须是字符串' })
  topic: string;


  @ApiProperty({ description: '微信群组分类' })
  @IsNotEmpty({ message: '微信群组名称不能为空' })
  @IsString({ message: '微信群组名称必须是字符串' })
  tat: string;
}