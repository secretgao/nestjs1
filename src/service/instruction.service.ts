import { Injectable, HttpException, HttpStatus, Body ,Logger} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Instruction } from '../entity/instruction.entity';
import { PaginationDto } from '../dto/pagination.dto';
import { CreateInstructionDto } from '../dto/create_instruction.dto';
import { ApiResponse } from '../common/api_response';
@Injectable()

export class InstructionService {
  constructor(
    @InjectRepository(Instruction)
    private InstructionRepository: Repository<Instruction>,
    private readonly logger:Logger     //使用日志
  ) {
    this.logger.log('instruction service init')
  }

  async findAll(options: PaginationDto): 
  Promise<{ data: Instruction[]; total: number; page: number; limit: number }> {
    const { page, limit } = options;
    const [data, total] = await this.InstructionRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      order: {
        id: 'DESC', // Add this line to sort by id in descending order
      },
    });
    return {
      data,
      total,
      page,
      limit,
    };
  }

  async create(InstructionDto: CreateInstructionDto): Promise<ApiResponse<null>> {
    const { name } = InstructionDto;
    const existingInstruction = await this.InstructionRepository.findOne({ where: { name } });

    if (existingInstruction) {
      throw new HttpException('指令名称已存在', HttpStatus.CONFLICT);
    }

    const newInstruction = this.InstructionRepository.create(InstructionDto);
    await this.InstructionRepository.save(newInstruction);

    return new ApiResponse(HttpStatus.OK, '添加成功');
  }


  // 更新数据
  async updateInstruction(id: string,InstructionDto: CreateInstructionDto) :Promise<ApiResponse<string>>  {
    const { name } = InstructionDto;
    const existingInstruction = await this.InstructionRepository.findOne({ where: { name } });

    if (existingInstruction) {
      throw new HttpException('指令名称已存在', HttpStatus.CONFLICT);
    }

  
    const result = await this.InstructionRepository.update(id, InstructionDto);
    this.logger.log('修改指令')
    this.logger.log(result)
    if (result && result.affected == 1 ){
      return new ApiResponse(HttpStatus.OK, '修改成功',result.affected.toString());
    }
    throw new HttpException('更新失败', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}