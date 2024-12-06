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
exports.CustomerManageService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const customer_manage_entity_1 = require("../entity/customer_manage.entity");
const api_response_return_1 = require("../common/api-response-return");
const crypto = require("crypto");
let CustomerManageService = class CustomerManageService {
    constructor(customerManageRepository) {
        this.customerManageRepository = customerManageRepository;
    }
    async findAllByStatus() {
        const status = 1;
        const queryBuilder = this.customerManageRepository.createQueryBuilder('customer');
        queryBuilder
            .select(['customer.id', 'customer.abbreviation'])
            .andWhere('customer.status = :status', { status });
        const [data,] = await queryBuilder.getManyAndCount();
        return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.OK, '获取成功', { data });
    }
    async findOne(id) {
        return await this.customerManageRepository.findOne({ where: { id } });
    }
    async create(createCustomerManageDto) {
        const { username } = createCustomerManageDto;
        const info = await this.customerManageRepository.findOne({ where: { username } });
        if (info) {
            return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.CONFLICT, '登录账号已存在，请修改');
        }
        await this.customerManageRepository.save(createCustomerManageDto);
        return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.OK, '创建成功');
    }
    async update(id, updateCustomerManageDto) {
        const info = await this.findOne(id);
        if (!info) {
            return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.NOT_FOUND, '未找到数据');
        }
        await this.customerManageRepository.update(id, updateCustomerManageDto);
        return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.OK, '更新成功');
    }
    async initPassword(ids) {
        const password = crypto.createHash('md5').update('123456').digest('hex');
        const result = await this.customerManageRepository.createQueryBuilder()
            .update(customer_manage_entity_1.CustomerManage)
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
        await this.customerManageRepository.update(id, { status });
        return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.OK, '更新成功');
    }
    async remove(id) {
        await this.customerManageRepository.delete(id);
        return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.OK, '删除成功');
    }
    async findAll(paginationQuery) {
        const { page, limit, abbreviation, id, status } = paginationQuery;
        const queryBuilder = this.customerManageRepository.createQueryBuilder('customer');
        if (abbreviation) {
            queryBuilder.andWhere('customer.abbreviation LIKE :abbreviation', { abbreviation: `%${abbreviation}%` });
        }
        if (id) {
            queryBuilder.andWhere('customer.id = :id', { id });
        }
        if (status) {
            queryBuilder.andWhere('customer.status = :status', { status });
        }
        queryBuilder.skip((page - 1) * limit).take(limit);
        const [data, total] = await queryBuilder.getManyAndCount();
        return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.OK, '获取成功', { data, total });
    }
};
exports.CustomerManageService = CustomerManageService;
exports.CustomerManageService = CustomerManageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(customer_manage_entity_1.CustomerManage)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CustomerManageService);
//# sourceMappingURL=customer-manage.service.js.map