import { Injectable, HttpException, HttpStatus ,Logger, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InstructionAllocation } from '../entity/instruction_allocation.entity';
import { CreateInstructionAllocationDto } from '../dto/create-instruction-allocation.dto';
import { ApiResponseReturn } from '../common/api-response-return';
 
@Injectable()

export class InstructionAllocationService {
  constructor(
    @InjectRepository(InstructionAllocation)
    private InstructionAllocationRepository: Repository<InstructionAllocation>,
    private readonly logger:Logger     //使用日志
  ) {
    this.logger.log('instruction service init')
  }

  formatDate(date: Date, format: string): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从0开始，所以要加1
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
  
    let formattedDate = format;
  
    formattedDate = formattedDate.replace('y', String(year));
    formattedDate = formattedDate.replace('m', month);
    formattedDate = formattedDate.replace('d', day);
    formattedDate = formattedDate.replace('H', hours);
    formattedDate = formattedDate.replace('i', minutes);
    formattedDate = formattedDate.replace('s', seconds);
  
    return formattedDate;
  }
  
 
  async findAll(
    paginationQuery: { page: number, limit: number, customer_name?: string, allocation_number?: string, instruction_name?:string,start_time?:string,end_time?:string }
  ):Promise<ApiResponseReturn<any>>{
  
    const { page, limit, customer_name, allocation_number,instruction_name,start_time,end_time } = paginationQuery;
    const queryBuilder = this.InstructionAllocationRepository.createQueryBuilder('instruction_allocation');

    if (customer_name) {
      queryBuilder.andWhere('instruction_allocation.customer_name LIKE :customer_name', { customer_name: `%${customer_name}%` });
    }
    if (instruction_name) {
      queryBuilder.andWhere('instruction_allocation.instruction_name=:instruction_name', { instruction_name });
    }
    if (allocation_number) {
      queryBuilder.andWhere('instruction_allocation.allocation_number = :allocation_number', { allocation_number });
    }
    if (start_time) {
      queryBuilder.andWhere('instruction_allocation.created_at >= :start_time', {  start_time });
    }
    if (end_time) {
      queryBuilder.andWhere('instruction_allocation.created_at <:end_time', {  end_time });
    }
   
    // 添加按 id 倒序排序
    queryBuilder.orderBy('instruction_allocation.id', 'DESC');

    queryBuilder.skip((page - 1) * limit).take(limit);

    const [old, total] = await queryBuilder.getManyAndCount();
    // 格式化 created_at 字段
    const data = old.map(item => ({
      ...item,
      created_at: this.formatDate(new Date(item.created_at), 'y-m-d H:i:s'),
      start_time: this.formatDate(new Date(item.start_time), 'y-m-d H:i:s'),
      end_time: this.formatDate(new Date(item.end_time), 'y-m-d H:i:s'),
      updated_at: this.formatDate(new Date(item.updated_at), 'y-m-d H:i:s'),
    }));
    return new ApiResponseReturn(HttpStatus.OK, '获取成功',{ data, total });
    
  }

  async create(InstructionAllocationDto: CreateInstructionAllocationDto): Promise<ApiResponseReturn<null>> {
    
    // 格式化创建时间
    const createdAt = new Date();
    const formattedCreatedAt = this.formatDate(createdAt,'y-m-d H:i:s');
 


    // 查询当天已有的记录数量
    const count = await this.InstructionAllocationRepository.createQueryBuilder('instruction_allocation').getCount();
    
    // 生成新的 allocation_number
    const allocationNumber = `FP${this.formatDate(createdAt,'y-m-d')}${String(count + 1).padStart(3, '0')}`;
    // 创建新的 Instruction 实例并设置创建时间
    const newInstruction = this.InstructionAllocationRepository.create({
      ...InstructionAllocationDto,
      created_at:formattedCreatedAt,
      allocation_number:allocationNumber

    });    
    await this.InstructionAllocationRepository.save(newInstruction);

    return new ApiResponseReturn(HttpStatus.OK, '添加成功');
  }


  async updateInstruction(id: number, InstructionAllocationDto: CreateInstructionAllocationDto):  Promise<ApiResponseReturn<null>> {
    // 检查要更新的数据是否存在
    const existingInstructionById = await this.InstructionAllocationRepository.findOne({ where: { id } });
    if (!existingInstructionById) {
      throw new NotFoundException('要更新的指令不存在');
    }
    // 格式化更新时间
    const updatedAt = new Date();
    const formattedUpdatedAt = this.formatDate(updatedAt,'y-m-d H:i:s');

    // 将 updated_at 字段添加到更新数据中
    const updateData = {
      ...InstructionAllocationDto,
      updated_at: formattedUpdatedAt,
    };

    const result = await this.InstructionAllocationRepository.update(id, updateData);
   
    this.logger.log('修改指令')
    this.logger.log(updateData)
    if (result && result.affected == 1 ){
      return new ApiResponseReturn(HttpStatus.OK, '修改成功');
    }
    throw new HttpException('更新失败', HttpStatus.INTERNAL_SERVER_ERROR);
  }


  async remove(id: number[]): Promise<ApiResponseReturn<null>> {
    await this.InstructionAllocationRepository.delete(id);
    return new ApiResponseReturn(HttpStatus.OK, '删除成功');
  }

  
}