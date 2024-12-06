import { Injectable, HttpException, HttpStatus, Body ,Logger, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Instruction } from '../entity/instruction.entity';
import { CreateInstructionDto } from '../dto/create-instruction.dto';
import { ApiResponseReturn } from '../common/api-response-return';
 
@Injectable()

export class InstructionService {
  constructor(
    @InjectRepository(Instruction)
    private InstructionRepository: Repository<Instruction>,
    private readonly logger:Logger     //使用日志
  ) {
    this.logger.log('instruction service init')
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从0开始，所以要加1
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  async findAll(
    paginationQuery: { page: number, limit: number, name?: string,code?:string, id?: number, is_open?: number,admin_name?:string,start_time?:string,end_time?:string }
  ):Promise<ApiResponseReturn<any>>{
  
    const { page, limit, name,code, id, is_open,admin_name,start_time,end_time } = paginationQuery;
    const queryBuilder = this.InstructionRepository.createQueryBuilder('instruction');

    if (name) {
      queryBuilder.andWhere('instruction.name LIKE :name', { name: `%${name}%` });
    }
    if (admin_name) {
      queryBuilder.andWhere('instruction.admin_name=:admin_name', { admin_name });
    }
    if (id) {
      queryBuilder.andWhere('instruction.id = :id', { id });
    }

    if (is_open) {
      queryBuilder.andWhere('instruction.is_open = :is_open', { is_open });
    }
    if (start_time) {
      queryBuilder.andWhere('instruction.created_at >= :start_time', {  start_time });
    }
    if (end_time) {
      queryBuilder.andWhere('instruction.created_at <:end_time', {  end_time });
    }
    if (code) {
      queryBuilder.andWhere('instruction.code = :code', { code });
    }
    // 添加按 id 倒序排序
    queryBuilder.orderBy('instruction.id', 'DESC');

    queryBuilder.skip((page - 1) * limit).take(limit);

    const [data, total] = await queryBuilder.getManyAndCount();

    return new ApiResponseReturn(HttpStatus.OK, '获取成功',{ data, total });
    
  }

  async create(InstructionDto: CreateInstructionDto): Promise<ApiResponseReturn<null>> {
    const { name } = InstructionDto;
    const existingInstruction = await this.InstructionRepository.findOne({ where: { name } });

    if (existingInstruction) {
      throw new HttpException('指令名称已存在', HttpStatus.CONFLICT);
    }
    // 格式化创建时间
    const createdAt = new Date();
    const formattedCreatedAt = this.formatDate(createdAt);

    // 创建新的 Instruction 实例并设置创建时间
    const newInstruction = this.InstructionRepository.create({
      ...InstructionDto,
      created_at:formattedCreatedAt,
      updated_at:formattedCreatedAt
    });    
    await this.InstructionRepository.save(newInstruction);

    return new ApiResponseReturn(HttpStatus.OK, '添加成功');
  }


  async updateInstruction(id: number, InstructionDto: CreateInstructionDto):  Promise<ApiResponseReturn<null>> {
    // 检查要更新的数据是否存在
    const existingInstructionById = await this.InstructionRepository.findOne({ where: { id } });
    if (!existingInstructionById) {
      throw new NotFoundException('要更新的指令不存在');
    }
  
    const { name } = InstructionDto;
    const existingInstructionByName = await this.InstructionRepository.findOne({ where: { name } });
   
    // 检查是否存在同名指令且该指令的 id 不同于当前正在更新的指令的 id
    if (existingInstructionByName && existingInstructionByName.id != id) {
      throw new HttpException('指令名称已存在', HttpStatus.CONFLICT);
    }
  
    // 格式化更新时间
    const updatedAt = new Date();
    const formattedUpdatedAt = this.formatDate(updatedAt);

    // 将 updated_at 字段添加到更新数据中
    const updateData = {
      ...InstructionDto,
      updated_at: formattedUpdatedAt,
    };

    const result = await this.InstructionRepository.update(id, updateData);
   
    this.logger.log('修改指令')
    this.logger.log(updateData)
    if (result && result.affected == 1 ){
      return new ApiResponseReturn(HttpStatus.OK, '修改成功');
    }
    throw new HttpException('更新失败', HttpStatus.INTERNAL_SERVER_ERROR);
  }


  async remove(id: number[]): Promise<ApiResponseReturn<null>> {
    await this.InstructionRepository.delete(id);
    return new ApiResponseReturn(HttpStatus.OK, '删除成功');
  }

   /**
   * 后台更新客户状态
   * @param id 
   * @param status 
   * @returns 
   */
   async updateStatus(id:number,is_open:number){

    const info = await this.findOne(id);
    if (!info){
      return new ApiResponseReturn(HttpStatus.NOT_FOUND, '未找到数据');
    }
   
    await this.InstructionRepository.update(id, {is_open});
    return new ApiResponseReturn(HttpStatus.OK, '更新成功');
  }
  findOne(id: number): Promise<Instruction> {
    return this.InstructionRepository.findOne({ where: { id } });
  }


   /**
   * 后台指令分配指令管理列表
   * @param paginationQuery 
   * @returns 
   */
   async findAllByIsOpen(): Promise<ApiResponseReturn<any>> {
  
    const is_open = 1;
    const queryBuilder = this.InstructionRepository.createQueryBuilder('instruction');
    queryBuilder
      .select(['instruction.id', 'instruction.name']) // 指定你需要的字段
      .andWhere('instruction.is_open = :is_open', { is_open });
    const [data,  ] = await queryBuilder.getManyAndCount();
    return new ApiResponseReturn(HttpStatus.OK, '获取成功',{ data });
  }
}