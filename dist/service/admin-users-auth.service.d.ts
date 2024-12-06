import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AdminUsers } from '../entity/admin-user.entity';
import { ApiResponseReturn } from '../common/api-response-return';
import { UpdateAdminPasswordDto } from 'src/dto/update-admin-users.dto';
import { CreateAdminUserDto, LoginAdminUserDto } from '../dto/create-admin-users.dto';
export declare class AdminUsersAuthService {
    private adminUsersRepository;
    private readonly logger;
    constructor(adminUsersRepository: Repository<AdminUsers>, logger: Logger);
    register(adminUsersDto: CreateAdminUserDto): Promise<ApiResponseReturn<null>>;
    login(adminUsersDto: LoginAdminUserDto): Promise<ApiResponseReturn<string>>;
    findOne(id: number): Promise<AdminUsers>;
    updateAdminPassword(id: number, UpdateAdminPasswordDto: UpdateAdminPasswordDto): Promise<ApiResponseReturn<string>>;
    findAll(paginationQuery: {
        page: number;
        limit: number;
        username?: string;
        id?: number;
        status?: number;
    }): Promise<ApiResponseReturn<any>>;
    updateAdminStatus(id: number, status: number): Promise<ApiResponseReturn<string>>;
    remove(id: number[]): Promise<ApiResponseReturn<null>>;
    initPassword(ids: number): Promise<ApiResponseReturn<any>>;
    updateStatus(id: number, status: number): Promise<ApiResponseReturn<unknown>>;
}
