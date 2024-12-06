import { Logger } from '@nestjs/common';
import { AdminUsersAuthService } from '../service/admin-users-auth.service';
import { CreateAdminUserDto, LoginAdminUserDto } from '../dto/create-admin-users.dto';
import { UpdateAdminPasswordDto } from 'src/dto/update-admin-users.dto';
import { ApiResponseReturn } from '../common/api-response-return';
export declare class AdminUsersController {
    private readonly AdminUsersAuthService;
    private readonly logger;
    constructor(AdminUsersAuthService: AdminUsersAuthService, logger: Logger);
    register(adminUsersDto: CreateAdminUserDto): Promise<ApiResponseReturn<null>>;
    login(adminUsersDto: LoginAdminUserDto): Promise<{
        token: ApiResponseReturn<string>;
    }>;
    initPassword(id: number): Promise<ApiResponseReturn<any>>;
    updateAdmin(id: number, UpdateAdminPasswordDto: UpdateAdminPasswordDto): Promise<ApiResponseReturn<string>>;
    findAll(page?: number, limit?: number, username?: string, id?: number, status?: number): Promise<ApiResponseReturn<any>>;
    findinfo(user: any): ApiResponseReturn<{
        user: any;
    }>;
    remove(id: string): Promise<ApiResponseReturn<null>>;
    updateStatus(id: string, status: number): Promise<ApiResponseReturn<unknown>>;
}
