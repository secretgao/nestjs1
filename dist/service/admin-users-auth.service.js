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
exports.AdminUsersAuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const admin_user_entity_1 = require("../entity/admin-user.entity");
const jwt = require("jsonwebtoken");
const api_response_return_1 = require("../common/api-response-return");
const crypto = require("crypto");
let AdminUsersAuthService = class AdminUsersAuthService {
    constructor(adminUsersRepository, logger) {
        this.adminUsersRepository = adminUsersRepository;
        this.logger = logger;
        this.logger.log('admin user auth service init');
    }
    async register(adminUsersDto) {
        const { username, password } = adminUsersDto;
        const existingUser = await this.adminUsersRepository.findOne({ where: { username } });
        if (existingUser) {
            throw new common_1.HttpException('用户名已存在', common_1.HttpStatus.CONFLICT);
        }
        if (password) {
            adminUsersDto.password = crypto.createHash('md5').update(password).digest('hex');
        }
        else {
            adminUsersDto.password = crypto.createHash('md5').update('123456').digest('hex');
        }
        const newUser = this.adminUsersRepository.create(adminUsersDto);
        await this.adminUsersRepository.save(newUser);
        return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.OK, '注册成功');
    }
    async login(adminUsersDto) {
        const { username, password } = adminUsersDto;
        const user = await this.adminUsersRepository.findOne({ where: { username } });
        if (!user) {
            throw new common_1.HttpException('账号不存在', common_1.HttpStatus.NOT_FOUND);
        }
        if (user.status == 0) {
            return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.INTERNAL_SERVER_ERROR, '账号已被禁用，请联系管理员');
        }
        if (password != user.password) {
            throw new common_1.HttpException('密码错误', common_1.HttpStatus.UNAUTHORIZED);
        }
        const token = jwt.sign({ id: user.id, username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });
        return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.OK, '登录成功', token);
    }
    async findOne(id) {
        return await this.adminUsersRepository.findOne({ where: { id } });
    }
    async updateAdminPassword(id, UpdateAdminPasswordDto) {
        const info = await this.findOne(id);
        if (!info) {
            return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.NOT_FOUND, '未找到数据');
        }
        if (UpdateAdminPasswordDto.password) {
            UpdateAdminPasswordDto.password = crypto.createHash('md5').update(UpdateAdminPasswordDto.password).digest('hex');
        }
        const result = await this.adminUsersRepository.update(id, UpdateAdminPasswordDto);
        if (result && result.affected == 1) {
            return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.OK, '修改成功', result.affected.toString());
        }
        throw new common_1.HttpException('更新失败', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
    async findAll(paginationQuery) {
        const { page, limit, username, id, status } = paginationQuery;
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
        return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.OK, '获取成功', { data, total });
    }
    async updateAdminStatus(id, status) {
        const result = await this.adminUsersRepository.update(id, { status });
        if (result && result.affected == 1) {
            return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.OK, '修改成功', result.affected.toString());
        }
        throw new common_1.HttpException('更新失败', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
    async remove(id) {
        await this.adminUsersRepository.delete(id);
        return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.OK, '删除成功');
    }
    async initPassword(ids) {
        const password = crypto.createHash('md5').update('123456').digest('hex');
        const result = await this.adminUsersRepository.createQueryBuilder()
            .update(admin_user_entity_1.AdminUsers)
            .set({ password })
            .where("id in (:ids)", { ids: ids })
            .execute();
        if (result && result.affected > 1) {
            return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.OK, '修改成功', result.affected.toString());
        }
        return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.INTERNAL_SERVER_ERROR, '修改失败');
    }
    async updateStatus(id, status) {
        const info = await this.findOne(id);
        if (!info) {
            return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.NOT_FOUND, '未找到数据');
        }
        await this.adminUsersRepository.update(id, { status });
        return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.OK, '更新成功');
    }
};
exports.AdminUsersAuthService = AdminUsersAuthService;
exports.AdminUsersAuthService = AdminUsersAuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(admin_user_entity_1.AdminUsers)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        common_1.Logger])
], AdminUsersAuthService);
//# sourceMappingURL=admin-users-auth.service.js.map