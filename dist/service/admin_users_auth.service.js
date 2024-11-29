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
const admin_user_entity_1 = require("../entity/admin_user.entity");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const api_response_1 = require("../common/api_response");
let AdminUsersAuthService = class AdminUsersAuthService {
    constructor(adminUsersRepository, logger) {
        this.adminUsersRepository = adminUsersRepository;
        this.logger = logger;
        this.logger.log('admin user auth service init');
    }
    async findAll(options) {
        const { page, limit } = options;
        const [data, total] = await this.adminUsersRepository.findAndCount({
            skip: (page - 1) * limit,
            take: limit,
            order: {
                id: 'DESC',
            },
        });
        return {
            data,
            total,
            page,
            limit,
        };
    }
    async register(adminUsersDto) {
        const { username, password } = adminUsersDto;
        const existingUser = await this.adminUsersRepository.findOne({ where: { username } });
        if (existingUser) {
            throw new common_1.HttpException('用户名已存在', common_1.HttpStatus.CONFLICT);
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = this.adminUsersRepository.create({ username, password: hashedPassword });
        await this.adminUsersRepository.save(newUser);
        return new api_response_1.ApiResponse(common_1.HttpStatus.OK, '注册成功');
    }
    async login(adminUsersDto) {
        const { username, password } = adminUsersDto;
        const user = await this.adminUsersRepository.findOne({ where: { username } });
        if (!user) {
            throw new common_1.HttpException('账号不存在', common_1.HttpStatus.NOT_FOUND);
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.HttpException('密码错误', common_1.HttpStatus.UNAUTHORIZED);
        }
        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ id: user.id, username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });
            return new api_response_1.ApiResponse(common_1.HttpStatus.OK, '登录成功', token);
        }
    }
    async updateAdminPassword(id, UpdateAdminPasswordDto) {
        if (UpdateAdminPasswordDto.password) {
            UpdateAdminPasswordDto.password = await bcrypt.hash(UpdateAdminPasswordDto.password, 10);
        }
        const result = await this.adminUsersRepository.update(id, UpdateAdminPasswordDto);
        this.logger.log('修改密码');
        this.logger.log(result);
        if (result && result.affected == 1) {
            return new api_response_1.ApiResponse(common_1.HttpStatus.OK, '修改成功', result.affected.toString());
        }
        throw new common_1.HttpException('更新失败', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
};
exports.AdminUsersAuthService = AdminUsersAuthService;
exports.AdminUsersAuthService = AdminUsersAuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(admin_user_entity_1.AdminUsers)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        common_1.Logger])
], AdminUsersAuthService);
//# sourceMappingURL=admin_users_auth.service.js.map