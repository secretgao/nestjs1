import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerManage } from '../entity/customer_manage.entity';  
import { CreateCustomerManageDto } from '../dto/create-customer-manage.dto';
import { UpdateCustomerManageDto } from '../dto/update-customer-manage.dto';
import { ApiResponseReturn } from 'src/common/api-response-return';
import * as crypto from 'crypto';
@Injectable()
export class CustomerManageService {
  constructor(
    @InjectRepository(CustomerManage)
    private readonly customerManageRepository: Repository<CustomerManage>,
  ) {}

   
  /**
   * 后台指令分配客户管理列表
   * @param paginationQuery 
   * @returns 
   */
  async findAllByStatus(): Promise<ApiResponseReturn<any>> {
   
    const status = 1;
    const queryBuilder = this.customerManageRepository.createQueryBuilder('customer');
    queryBuilder
      .select(['customer.id', 'customer.abbreviation']) // 指定你需要的字段
      .andWhere('customer.status = :status', { status });
    const [data,  ] = await queryBuilder.getManyAndCount();
    return new ApiResponseReturn(HttpStatus.OK, '获取成功',{ data });
  }

  async findOne(id: number): Promise<CustomerManage> {
    return await this.customerManageRepository.findOne({ where: { id } });
  }

  /**
   * 后台-创建客户
   * @param createCustomerManageDto 
   * @returns 
   */
  async create(createCustomerManageDto: CreateCustomerManageDto): Promise<ApiResponseReturn<null>>  {
    const {username} = createCustomerManageDto;

    const info = await this.customerManageRepository.findOne({ where: { username } });
    if (info){
      return new ApiResponseReturn(HttpStatus.CONFLICT, '登录账号已存在，请修改');
    }
    await this.customerManageRepository.save(createCustomerManageDto);
    return new ApiResponseReturn(HttpStatus.OK, '创建成功');
  }

  /**
   * 后台更新客户信息
   * @param id 
   * @param updateCustomerManageDto 
   * @returns 
   */
  async update(id: number, updateCustomerManageDto: UpdateCustomerManageDto): Promise<ApiResponseReturn<null>>{
    const info = await this.findOne(id);
    if (!info){
      return new ApiResponseReturn(HttpStatus.NOT_FOUND, '未找到数据');
    }
    await this.customerManageRepository.update(id, updateCustomerManageDto);
    return new ApiResponseReturn(HttpStatus.OK, '更新成功');
  }

  /**
   * 后台更新客户信息
   * @param id 
   * @param updateCustomerManageDto 
   * @returns 
   */
  async initPassword(ids: number): Promise<ApiResponseReturn<any>>{
     
    const password =  crypto.createHash('md5').update('123456').digest('hex');
    const result = await this.customerManageRepository.createQueryBuilder()
          .update(CustomerManage)
          .set({password})
          .where("id in (:ids)", { ids: ids })
          .execute();

    if (result && result.affected > 1 ){
      return new ApiResponseReturn(HttpStatus.OK, '修改成功',result.affected.toString());
    }
    return new ApiResponseReturn(HttpStatus.INTERNAL_SERVER_ERROR, '修改失败');
  }


  /**
   * 后台更新客户状态
   * @param id 
   * @param status 
   * @returns 
   */
  async updateStatus(id:number,status:number){

    const info = await this.findOne(id);
    if (!info){
      return new ApiResponseReturn(HttpStatus.NOT_FOUND, '未找到数据');
    }
   
    await this.customerManageRepository.update(id, {status});
    return new ApiResponseReturn(HttpStatus.OK, '更新成功');
  }
  async remove(id: number[]): Promise<ApiResponseReturn<null>> {
    await this.customerManageRepository.delete(id);
    return new ApiResponseReturn(HttpStatus.OK, '删除成功');
  }


  /**
   * 后台客户管理列表
   * @param paginationQuery 
   * @returns 
   */
  async findAll(paginationQuery: { page: number, limit: number, abbreviation?: string, id?: number, status?: string }): Promise<ApiResponseReturn<any>> {
    const { page, limit, abbreviation, id, status } = paginationQuery;
    const queryBuilder = this.customerManageRepository.createQueryBuilder('customer');

    if (abbreviation) {
      queryBuilder.andWhere('customer.abbreviation LIKE :abbreviation', { abbreviation: `%${abbreviation}%` });
    }

    if (id) {
      queryBuilder.andWhere('customer.id = :id', { id });
    }

    if (status) {
      queryBuilder.andWhere('customer.status = :status', { status });
    }

    queryBuilder.skip((page - 1) * limit).take(limit);

    const [data, total] = await queryBuilder.getManyAndCount();

    return new ApiResponseReturn(HttpStatus.OK, '获取成功',{ data, total });
   
  }

}