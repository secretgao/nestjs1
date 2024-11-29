import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AdminUsers } from '../entity/admin_user.entity';
import { PaginationDto } from '../dto/pagination.dto';
import { CreateAdminUserDto } from '../dto/admin_users.dto';
import { ApiResponse } from '../common/api_response';
import { UpdateAdminPasswordDto } from 'src/dto/update_admin_users.dto';
export declare class AdminUsersAuthService {
    private adminUsersRepository;
    private readonly logger;
    constructor(adminUsersRepository: Repository<AdminUsers>, logger: Logger);
    findAll(options: PaginationDto): Promise<{
        data: AdminUsers[];
        total: number;
        page: number;
        limit: number;
    }>;
    register(adminUsersDto: CreateAdminUserDto): Promise<ApiResponse<null>>;
    login(adminUsersDto: CreateAdminUserDto): Promise<ApiResponse<string>>;
    updateAdminPassword(id: string, UpdateAdminPasswordDto: UpdateAdminPasswordDto): Promise<ApiResponse<string>>;
}
