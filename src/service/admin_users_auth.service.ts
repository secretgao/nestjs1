import { Injectable, BadRequestException, HttpException, HttpStatus, Body ,Logger} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminUsers } from '../entity/admin_user.entity';
import { PaginationDto } from '../dto/pagination.dto';
import { CreateAdminUserDto } from '../dto/admin_users.dto';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { ApiResponse } from '../common/api_response';
import { UpdateAdminPasswordDto } from 'src/dto/update_admin_users.dto';
@Injectable()

export class AdminUsersAuthService {
  constructor(
    @InjectRepository(AdminUsers)
    private adminUsersRepository: Repository<AdminUsers>,
    private readonly logger:Logger     //使用日志
  ) {
    this.logger.log('admin user auth service init')
  }

  async findAll(options: PaginationDto): 
  Promise<{ data: AdminUsers[]; total: number; page: number; limit: number }> {
    const { page, limit } = options;
    const [data, total] = await this.adminUsersRepository.findAndCount({
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

  async register(adminUsersDto: CreateAdminUserDto): Promise<ApiResponse<null>> {
    const { username, password } = adminUsersDto;
    const existingUser = await this.adminUsersRepository.findOne({ where: { username } });

    if (existingUser) {
      throw new HttpException('用户名已存在', HttpStatus.CONFLICT);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = this.adminUsersRepository.create({ username, password: hashedPassword });
    await this.adminUsersRepository.save(newUser);

    return new ApiResponse(HttpStatus.OK, '注册成功');
  }

  async login(adminUsersDto: CreateAdminUserDto): Promise<ApiResponse<string>> {
    const {username,password} = adminUsersDto;
    const user = await this.adminUsersRepository.findOne({ where: { username } });

    if (!user) {
      throw new HttpException('账号不存在', HttpStatus.NOT_FOUND);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new HttpException('密码错误', HttpStatus.UNAUTHORIZED);
    }

    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ id: user.id, username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });
      return new ApiResponse(HttpStatus.OK, '登录成功',token);
    }
  }

  async updateAdminPassword(id: string, UpdateAdminPasswordDto: UpdateAdminPasswordDto) :Promise<ApiResponse<string>>  {
    
    if (UpdateAdminPasswordDto.password) {
      UpdateAdminPasswordDto.password = await bcrypt.hash(UpdateAdminPasswordDto.password, 10);
    }
    // 更新用户数据
    const result = await this.adminUsersRepository.update(id, UpdateAdminPasswordDto);
    this.logger.log('修改密码')
    this.logger.log(result)
    if (result && result.affected == 1 ){
      return new ApiResponse(HttpStatus.OK, '修改成功',result.affected.toString());
    }
    throw new HttpException('更新失败', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}