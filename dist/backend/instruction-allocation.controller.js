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
exports.InstructionAllocationController = void 0;
const common_1 = require("@nestjs/common");
const instruction_allocation_service_1 = require("../service/instruction-allocation.service");
const create_instruction_allocation_dto_1 = require("../dto/create-instruction-allocation.dto");
const auth_public_1 = require("../common/auth-public");
const auth_guard_1 = require("../guard/auth_guard");
const swagger_1 = require("@nestjs/swagger");
let InstructionAllocationController = class InstructionAllocationController {
    constructor(InstructionAllocationService, logger) {
        this.InstructionAllocationService = InstructionAllocationService;
        this.logger = logger;
        this.logger.log('instruction allocaition init');
    }
    findAll(page = 1, limit = 10, customer_name, allocation_number, instruction_name, start_time, end_time) {
        return this.InstructionAllocationService.findAll({ page, limit, customer_name, allocation_number, instruction_name, start_time, end_time });
    }
    async create(InstructionAllocationDto) {
        try {
            const result = await this.InstructionAllocationService.create(InstructionAllocationDto);
            return result;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateInstruction(id, InstructionAllocationDto) {
        try {
            const result = await this.InstructionAllocationService.updateInstruction(id, InstructionAllocationDto);
            return result;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    remove(id) {
        const idArr = id.split(',').map(id => parseInt(id, 10));
        return this.InstructionAllocationService.remove(idArr);
    }
};
exports.InstructionAllocationController = InstructionAllocationController;
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: '指令分配管理列表' }),
    (0, swagger_1.ApiParam)({ name: 'page', description: '分页' }),
    (0, swagger_1.ApiParam)({ name: 'limit', description: '分页' }),
    (0, swagger_1.ApiParam)({ name: 'customer_name', description: '客户简称' }),
    (0, swagger_1.ApiParam)({ name: 'allocation_number', description: '分配单号' }),
    (0, swagger_1.ApiParam)({ name: 'instruction_name', description: '指令名称' }),
    (0, swagger_1.ApiParam)({ name: 'start_time', description: '开始时间' }),
    (0, swagger_1.ApiParam)({ name: 'end_time', description: '结束时间' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('customer_name')),
    __param(3, (0, common_1.Query)('allocation_number')),
    __param(4, (0, common_1.Query)('instruction_name')),
    __param(5, (0, common_1.Query)('start_time')),
    __param(6, (0, common_1.Query)('end_time')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], InstructionAllocationController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, auth_public_1.Public)(),
    (0, swagger_1.ApiOperation)({ summary: '添加指令分配' }),
    (0, swagger_1.ApiBody)({ description: '参数', type: create_instruction_allocation_dto_1.CreateInstructionAllocationDto }),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_instruction_allocation_dto_1.CreateInstructionAllocationDto]),
    __metadata("design:returntype", Promise)
], InstructionAllocationController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '修改指令分配' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: '指令ID' }),
    (0, swagger_1.ApiBody)({ description: '修改指令分配', type: create_instruction_allocation_dto_1.CreateInstructionAllocationDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_instruction_allocation_dto_1.CreateInstructionAllocationDto]),
    __metadata("design:returntype", Promise)
], InstructionAllocationController.prototype, "updateInstruction", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiOperation)({ summary: '删除分配指令' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: '指令Id,多个逗号分割' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InstructionAllocationController.prototype, "remove", null);
exports.InstructionAllocationController = InstructionAllocationController = __decorate([
    (0, common_1.Controller)('instruction-allocation'),
    __metadata("design:paramtypes", [instruction_allocation_service_1.InstructionAllocationService,
        common_1.Logger])
], InstructionAllocationController);
//# sourceMappingURL=instruction-allocation.controller.js.map