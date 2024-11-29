import { Logger } from '@nestjs/common';
import { AdminUsersAuthService } from '../service/admin_users_auth.service';
import { CreateAdminUserDto } from '../dto/admin_users.dto';
import { UpdateAdminPasswordDto } from 'src/dto/update_admin_users.dto';
export declare class AdminUsersController {
    private readonly AdminUsersAuthService;
    private readonly logger;
    constructor(AdminUsersAuthService: AdminUsersAuthService, logger: Logger);
    register(adminUsersDto: CreateAdminUserDto): Promise<import("../common/api_response").ApiResponse<null>>;
    login(adminUsersDto: CreateAdminUserDto): Promise<{
        token: import("../common/api_response").ApiResponse<string>;
    }>;
    updateAdmin(id: string, UpdateAdminPasswordDto: UpdateAdminPasswordDto): Promise<import("../common/api_response").ApiResponse<string>>;
}
