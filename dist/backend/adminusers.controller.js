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
const admin_users_auth_service_1 = require("../service/admin-users-auth.service");
const create_admin_users_dto_1 = require("../dto/create-admin-users.dto");
const auth_public_1 = require("../common/auth-public");
const auth_guard_1 = require("../guard/auth_guard");
const swagger_1 = require("@nestjs/swagger");
const update_admin_users_dto_1 = require("../dto/update-admin-users.dto");
const user_decorator_1 = require("../decorator/user.decorator");
const api_response_return_1 = require("../common/api-response-return");
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
    initPassword(id) {
        return this.AdminUsersAuthService.initPassword(id);
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
    findAll(page = 1, limit = 10, username, id, status) {
        return this.AdminUsersAuthService.findAll({ page, limit, username, id, status });
    }
    findinfo(user) {
        return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.OK, '获取成功', { user });
    }
    remove(id) {
        const idArr = id.split(',').map(id => parseInt(id, 10));
        return this.AdminUsersAuthService.remove(idArr);
    }
    updateStatus(id, status) {
        const parseId = parseInt(id, 10);
        return this.AdminUsersAuthService.updateStatus(parseId, status);
    }
};
exports.AdminUsersController = AdminUsersController;
__decorate([
    (0, auth_public_1.Public)(),
    (0, swagger_1.ApiOperation)({ summary: '注册管理员' }),
    (0, swagger_1.ApiBody)({ description: '参数', type: create_admin_users_dto_1.CreateAdminUserDto }),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_admin_users_dto_1.CreateAdminUserDto]),
    __metadata("design:returntype", Promise)
], AdminUsersController.prototype, "register", null);
__decorate([
    (0, auth_public_1.Public)(),
    (0, swagger_1.ApiOperation)({ summary: '管理员登陆' }),
    (0, swagger_1.ApiBody)({ description: '参数', type: create_admin_users_dto_1.LoginAdminUserDto }),
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_admin_users_dto_1.LoginAdminUserDto]),
    __metadata("design:returntype", Promise)
], AdminUsersController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiOperation)({ summary: '重置密码' }),
    (0, swagger_1.ApiBody)({ schema: {
            type: 'object',
            properties: {
                id: {
                    type: 'array',
                    items: { type: 'number' },
                    description: ' 客户id, 多个逗号分割    [1,2,3,4]',
                },
            },
            required: ['id'],
        },
    }),
    (0, common_1.Post)('/init-password'),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AdminUsersController.prototype, "initPassword", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '修改管理员信息' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: '管理员用户ID' }),
    (0, swagger_1.ApiBody)({ description: '修改管理员信息', type: update_admin_users_dto_1.UpdateAdminPasswordDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_admin_users_dto_1.UpdateAdminPasswordDto]),
    __metadata("design:returntype", Promise)
], AdminUsersController.prototype, "updateAdmin", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('index'),
    (0, swagger_1.ApiOperation)({ summary: '账号管理' }),
    (0, swagger_1.ApiParam)({ name: 'page', description: '分页' }),
    (0, swagger_1.ApiParam)({ name: 'limit', description: '分页' }),
    (0, swagger_1.ApiParam)({ name: 'username', description: '账号' }),
    (0, swagger_1.ApiParam)({ name: 'status', description: '账号状态' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'id' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('username')),
    __param(3, (0, common_1.Query)('id')),
    __param(4, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, Number, Number]),
    __metadata("design:returntype", void 0)
], AdminUsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('info'),
    (0, swagger_1.ApiOperation)({ summary: '个人信息' }),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AdminUsersController.prototype, "findinfo", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiOperation)({ summary: '删除管理员' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: '管理员Id,多个逗号分割' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminUsersController.prototype, "remove", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiOperation)({ summary: '修改管理员状态' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: '管理员Id' }),
    (0, swagger_1.ApiParam)({ name: 'status', description: ' 管理员状态 1启用0禁用' }),
    (0, common_1.Patch)(':id/status'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], AdminUsersController.prototype, "updateStatus", null);
exports.AdminUsersController = AdminUsersController = __decorate([
    (0, common_1.Controller)('admin_users'),
    __metadata("design:paramtypes", [admin_users_auth_service_1.AdminUsersAuthService,
        common_1.Logger])
], AdminUsersController);
//# sourceMappingURL=adminusers.controller.js.map