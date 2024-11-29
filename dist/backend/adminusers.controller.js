"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUsersController = void 0;
const common_1 = require("@nestjs/common");
const admin_users_auth_service_1 = require("../service/admin_users_auth.service");
const admin_users_dto_1 = require("../dto/admin_users.dto");
const auth_public_1 = require("../common/auth_public");
const swagger_1 = require("@nestjs/swagger");
const update_admin_users_dto_1 = require("../dto/update_admin_users.dto");
let AdminUsersController = class AdminUsersController {
    constructor(AdminUsersAuthService, logger) {
        this.AdminUsersAuthService = AdminUsersAuthService;
        this.logger = logger;
        this.logger.log('admin init');
    }
    async register(adminUsersDto) {
        try {
            const result = await this.AdminUsersAuthService.register(adminUsersDto);
            return result;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async login(adminUsersDto) {
        try {
            const token = await this.AdminUsersAuthService.login(adminUsersDto);
            if (token) {
                this.logger.log('login get token');
                this.logger.log(token);
                return { token };
            }
            else {
                throw new common_1.HttpException('Invalid credentials', common_1.HttpStatus.UNAUTHORIZED);
            }
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async updateAdmin(id, UpdateAdminPasswordDto) {
        try {
            const result = await this.AdminUsersAuthService.updateAdminPassword(id, UpdateAdminPasswordDto);
            return result;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.AdminUsersController = AdminUsersController;
__decorate([
    (0, auth_public_1.Public)(),
    (0, swagger_1.ApiOperation)({ summary: '注册管理员' }),
    (0, swagger_1.ApiBody)({ description: '参数', type: admin_users_dto_1.CreateAdminUserDto }),
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_users_dto_1.CreateAdminUserDto]),
    __metadata("design:returntype", Promise)
], AdminUsersController.prototype, "register", null);
__decorate([
    (0, auth_public_1.Public)(),
    (0, swagger_1.ApiOperation)({ summary: '管理员登陆' }),
    (0, swagger_1.ApiBody)({ description: '参数', type: admin_users_dto_1.CreateAdminUserDto }),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_users_dto_1.CreateAdminUserDto]),
    __metadata("design:returntype", Promise)
], AdminUsersController.prototype, "login", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '修改管理员密码' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: '管理员用户ID' }),
    (0, swagger_1.ApiBody)({ description: '修改管理员密码', type: update_admin_users_dto_1.UpdateAdminPasswordDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_admin_users_dto_1.UpdateAdminPasswordDto]),
    __metadata("design:returntype", Promise)
], AdminUsersController.prototype, "updateAdmin", null);
exports.AdminUsersController = AdminUsersController = __decorate([
    (0, common_1.Controller)('admin_users'),
    __metadata("design:paramtypes", [admin_users_auth_service_1.AdminUsersAuthService,
        common_1.Logger])
], AdminUsersController);
//# sourceMappingURL=adminusers.controller.js.map