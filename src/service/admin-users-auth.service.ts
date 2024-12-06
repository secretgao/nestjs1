import { Injectable, BadRequestException, HttpException, HttpStatus, Body ,Logger} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminUsers } from '../entity/admin-user.entity';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { ApiResponseReturn } from '../common/api-response-return';
import { UpdateAdminPasswordDto } from 'src/dto/update-admin-users.dto';
import * as crypto from 'crypto';
import { CreateAdminUserDto, LoginAdminUserDto } from '../dto/create-admin-users.dto';
@Injectable()

export class AdminUsersAuthService {
  constructor(
    @InjectRepository(AdminUsers)
    private adminUsersRepository: Repository<AdminUsers>,
    private readonly logger:Logger     //使用日志
  ) {
    this.logger.log('admin user auth service init')
  }

  async register(adminUsersDto: CreateAdminUserDto): Promise<ApiResponseReturn<null>> {
    const { username, password } = adminUsersDto;
    const existingUser = await this.adminUsersRepository.findOne({ where: { username } });

    if (existingUser) {
      throw new HttpException('用户名已存在', HttpStatus.CONFLICT);
    }
    if (password){
      adminUsersDto.password = crypto.createHash('md5').update(password).digest('hex');
    } else {
      adminUsersDto.password = crypto.createHash('md5').update('123456').digest('hex');
    }
  
    
 ///   const hashedPassword = await bcrypt.hash(md5password, 10);
    const newUser = this.adminUsersRepository.create(adminUsersDto);
    await this.adminUsersRepository.save(newUser);

    return new ApiResponseReturn(HttpStatus.OK, '注册成功');
  }

  async login(adminUsersDto: LoginAdminUserDto): Promise<ApiResponseReturn<string>> {
    const {username,password} = adminUsersDto;
    const user = await this.adminUsersRepository.findOne({ where: { username } });

    if (!user) {
      throw new HttpException('账号不存在', HttpStatus.NOT_FOUND);
    }
/*
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new HttpException('密码错误', HttpStatus.UNAUTHORIZED);
    }
*/
    if (user.status == 0){
      return new ApiResponseReturn(HttpStatus.INTERNAL_SERVER_ERROR, '账号已被禁用，请联系管理员');
    } 
    if (password != user.password) {
      return new ApiResponseReturn( HttpStatus.UNAUTHORIZED, '密码错误');
    }
   // if (user && await bcrypt.compare(password, user.password)) {
    //  const token = jwt.sign({ id: user.id, username: user.username }, 'your_jwt_secret', { expiresIn: '10s' });
      const token = jwt.sign({ id: user.id, username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });
      return new ApiResponseReturn(HttpStatus.OK, '登录成功',token);
    //}
  }

  async findOne(id: number): Promise<AdminUsers> {
    return await this.adminUsersRepository.findOne({ where: { id } });
  }
  /**
   * 更新管理员信息
   * @param id 
   * @param UpdateAdminPasswordDto 
   * @returns 
   */
  async updateAdminPassword(id: number, UpdateAdminPasswordDto: UpdateAdminPasswordDto) :Promise<ApiResponseReturn<string>>  {
    
    const info = await this.findOne(id);

    if (!info){
      return new ApiResponseReturn(HttpStatus.NOT_FOUND, '未找到数据');
    }
    if (UpdateAdminPasswordDto.password) {
      UpdateAdminPasswordDto.password =  crypto.createHash('md5').update(UpdateAdminPasswordDto.password).digest('hex');
    }
    // 更新用户数据
    const result = await this.adminUsersRepository.update(id, UpdateAdminPasswordDto);
    
    if (result && result.affected == 1 ){
      return new ApiResponseReturn(HttpStatus.OK, '修改成功',result.affected.toString());
    }
    throw new HttpException('更新失败', HttpStatus.INTERNAL_SERVER_ERROR);
  }


   /**
   * 后台客户管理列表
   * @param paginationQuery 
   * @returns 
   */
   async findAll(paginationQuery: { page: number, limit: number, username?: string, id?: number,status?:number}): Promise<ApiResponseReturn<any>> {
    const { page, limit, username, id,status } = paginationQuery;
    const queryBuilder = this.adminUsersRepository.createQueryBuilder('admin_users');

    if (username) {
      queryBuilder.andWhere('admin_users.username LIKE :username', { username: `%${username}%` });
    }

    if (id) {
      queryBuilder.andWhere('admin_users.id = :id', { id });
    }
    if (status) {
      queryBuilder.andWhere('admin_users.status = :status', { status });
    }
 
    queryBuilder.skip((page - 1) * limit).take(limit);

    const [data, total] = await queryBuilder.getManyAndCount();

    return new ApiResponseReturn(HttpStatus.OK, '获取成功',{ data, total });
   
  }

  /**
   * 修改管理员账号状态
   * @param id 
   * @param status 
   * @returns 
   */
  async updateAdminStatus(id: number, status:number) :Promise<ApiResponseReturn<string>>  {
    
    // 更新用户数据
    const result = await this.adminUsersRepository.update(id, {status}); 
    if (result && result.affected == 1 ){
      return new ApiResponseReturn(HttpStatus.OK, '修改成功',result.affected.toString());
    }
    throw new HttpException('更新失败', HttpStatus.INTERNAL_SERVER_ERROR);
  }


  /**
   * 删除管理员
   * @param id 
   * @returns 
   */
  async remove(id: number[]): Promise<ApiResponseReturn<null>> {
    await this.adminUsersRepository.delete(id);
    return new ApiResponseReturn(HttpStatus.OK, '删除成功');
  }

    /**
   * 后台重置管理员密码
   * @param id 
   * @param updateCustomerManageDto 
   * @returns 
   */
    async initPassword(ids: number): Promise<ApiResponseReturn<any>>{
     
      const password =  crypto.createHash('md5').update('123456').digest('hex');
      const result = await this.adminUsersRepository.createQueryBuilder()
            .update(AdminUsers)
            .set({password})
            .where("id in (:ids)", { ids: ids })
            .execute();
 
      if (result && result.affected > 1 ){
        return new ApiResponseReturn(HttpStatus.OK, '修改成功',result.affected.toString());
      }
      return new ApiResponseReturn(HttpStatus.INTERNAL_SERVER_ERROR, '修改失败');
    }

     /**
   * 后台更新管理员状态
   * @param id 
   * @param status 
   * @returns 
   */
  async updateStatus(id:number,status:number){

    const info = await this.findOne(id);
    if (!info){
      return new ApiResponseReturn(HttpStatus.NOT_FOUND, '未找到数据');
    }
   
    await this.adminUsersRepository.update(id, {status});
    return new ApiResponseReturn(HttpStatus.OK, '更新成功');
  }
  
}