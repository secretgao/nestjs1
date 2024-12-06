import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsInt, IsNotEmpty } from 'class-validator';

export class CreateCustomerManageDto {

  @ApiProperty({ description: '客户简称' })
  @IsNotEmpty({ message: '客户简称不能为空' })
  @IsString({ message: '客户简称必须是字符串' })
  abbreviation: string;

  @IsInt()
  @IsOptional()
  status: number = 0; 

  @ApiProperty({ description: '登录帐号' })
  @IsNotEmpty({ message: '登录帐号不能为空' })
  @IsString({ message: '登录帐号必须是字符串' })
  username: string;

  @ApiProperty({ description: '客户对接人' })
  @IsOptional()
  @IsString()
  contact_person?: string;

  @ApiProperty({ description: '客户公司名称' })
  @IsOptional()
  @IsString()
  customer_company_name?: string;

  @ApiProperty({ description: '联系电话' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({ description: '公司地址' })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty({ description: '行业类别' })
  @IsOptional()
  @IsString()
  industry_category?: string;

  @ApiProperty({ description: '备注' })
  @IsOptional()
  @IsString()
  remark?: string;
}