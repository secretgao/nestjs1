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
exports.BCustomerManageController = void 0;
const common_1 = require("@nestjs/common");
const customer_manage_service_1 = require("../service/customer-manage.service");
const create_customer_manage_dto_1 = require("../dto/create-customer-manage.dto");
const update_customer_manage_dto_1 = require("../dto/update-customer-manage.dto");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../guard/auth_guard");
let BCustomerManageController = class BCustomerManageController {
    constructor(customerManageService) {
        this.customerManageService = customerManageService;
    }
    findAll(page = 1, limit = 10, abbreviation, id, status) {
        return this.customerManageService.findAll({ page, limit, abbreviation, id, status });
    }
    create(createCustomerManageDto) {
        return this.customerManageService.create(createCustomerManageDto);
    }
    update(id, updateCustomerManageDto) {
        return this.customerManageService.update(id, updateCustomerManageDto);
    }
    remove(id) {
        const idArr = id.split(',').map(id => parseInt(id, 10));
        return this.customerManageService.remove(idArr);
    }
    updateStatus(id, status) {
        const parseId = parseInt(id, 10);
        return this.customerManageService.updateStatus(parseId, status);
    }
    findAllByStatus() {
        return this.customerManageService.findAllByStatus();
    }
    initPassword(id) {
        return this.customerManageService.initPassword(id);
    }
    findOne(id) {
        return this.customerManageService.findOne(id);
    }
};
exports.BCustomerManageController = BCustomerManageController;
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: '客户管理列表' }),
    (0, swagger_1.ApiParam)({ name: 'page', description: '分页' }),
    (0, swagger_1.ApiParam)({ name: 'limit', description: '分页' }),
    (0, swagger_1.ApiParam)({ name: 'abbreviation', description: '客户简称' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: '客户Id' }),
    (0, swagger_1.ApiParam)({ name: 'status', description: ' 客户状态 1启用0禁用' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('abbreviation')),
    __param(3, (0, common_1.Query)('id')),
    __param(4, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, Number, String]),
    __metadata("design:returntype", void 0)
], BCustomerManageController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiOperation)({ summary: '创建客户' }),
    (0, swagger_1.ApiBody)({ description: '创建客户', type: create_customer_manage_dto_1.CreateCustomerManageDto }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_customer_manage_dto_1.CreateCustomerManageDto]),
    __metadata("design:returntype", void 0)
], BCustomerManageController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiOperation)({ summary: '编辑客户' }),
    (0, swagger_1.ApiBody)({ description: '编辑客户', type: update_customer_manage_dto_1.UpdateCustomerManageDto }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_customer_manage_dto_1.UpdateCustomerManageDto]),
    __metadata("design:returntype", void 0)
], BCustomerManageController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiOperation)({ summary: '删除客户' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: '客户Id,多个逗号分割' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BCustomerManageController.prototype, "remove", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiOperation)({ summary: '修改客户状态' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: '客户Id' }),
    (0, swagger_1.ApiParam)({ name: 'status', description: ' 客户状态 1启用0禁用' }),
    (0, common_1.Patch)(':id/status'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], BCustomerManageController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('/get-customer'),
    (0, swagger_1.ApiOperation)({ summary: '获取可用的客户列表' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BCustomerManageController.prototype, "findAllByStatus", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiOperation)({ summary: '初始化密码' }),
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
], BCustomerManageController.prototype, "initPassword", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BCustomerManageController.prototype, "findOne", null);
exports.BCustomerManageController = BCustomerManageController = __decorate([
    (0, common_1.Controller)('bcustomer-manage'),
    __metadata("design:paramtypes", [customer_manage_service_1.CustomerManageService])
], BCustomerManageController);
//# sourceMappingURL=bcustomer-manage.controller.js.map