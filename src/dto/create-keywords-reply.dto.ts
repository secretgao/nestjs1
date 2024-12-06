import { IsNotEmpty ,IsOptional,IsInt,Min,Max} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateKeywordsReplyDto {
    @ApiProperty({ description: '回复关键词' })
    @IsNotEmpty({ message: '请输入回复关键词' })
    keywords: string;
    @ApiProperty({ description: '回复关内容' })
    @IsNotEmpty({ message: '请输入回复内容' })
    reply: string;


    @ApiProperty({ description: '开关 1开0关' })
    @IsOptional()
    @IsInt()
    @Min(0) 
    @Max(1)
    is_open:number;

    @ApiProperty({ description: '是否精准匹配 1开0关' })
    @IsOptional()
    @IsInt()
    @Min(0) 
    @Max(1)
    is_accureate:number;
}