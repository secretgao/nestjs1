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
exports.InstructionController = void 0;
const common_1 = require("@nestjs/common");
const instruction_service_1 = require("../service/instruction.service");
const create_instruction_dto_1 = require("../dto/create-instruction.dto");
const auth_guard_1 = require("../guard/auth_guard");
const swagger_1 = require("@nestjs/swagger");
let InstructionController = class InstructionController {
    constructor(InstructionService, logger) {
        this.InstructionService = InstructionService;
        this.logger = logger;
        this.logger.log('instruction init');
    }
    findAll(page = 1, limit = 10, name, code, id, is_open, admin_name, start_time, end_time) {
        return this.InstructionService.findAll({ page, limit, name, code, id, is_open, admin_name, start_time, end_time });
    }
    findAllByIsOpen() {
        return this.InstructionService.findAllByIsOpen();
    }
    async create(InstructionDto) {
        try {
            const result = await this.InstructionService.create(InstructionDto);
            return result;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateInstruction(id, InstructionDto) {
        try {
            const result = await this.InstructionService.updateInstruction(id, InstructionDto);
            return result;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    remove(id) {
        const idArr = id.split(',').map(id => parseInt(id, 10));
        return this.InstructionService.remove(idArr);
    }
    updateStatus(id, is_open) {
        const parseId = parseInt(id, 10);
        return this.InstructionService.updateStatus(parseId, is_open);
    }
};
exports.InstructionController = InstructionController;
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: '指令管理列表' }),
    (0, swagger_1.ApiParam)({ name: 'page', description: '分页' }),
    (0, swagger_1.ApiParam)({ name: 'limit', description: '分页' }),
    (0, swagger_1.ApiParam)({ name: 'name', description: 'name' }),
    (0, swagger_1.ApiParam)({ name: 'code', description: '标识码' }),
    (0, swagger_1.ApiParam)({ name: 'admin_name', description: '创建人' }),
    (0, swagger_1.ApiParam)({ name: 'start_time', description: '开始时间' }),
    (0, swagger_1.ApiParam)({ name: 'end_time', description: '结束时间' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Id' }),
    (0, swagger_1.ApiParam)({ name: 'is_open', description: ' 状态 1启用0禁用' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('name')),
    __param(3, (0, common_1.Query)('code')),
    __param(4, (0, common_1.Query)('id')),
    __param(5, (0, common_1.Query)('is_open')),
    __param(6, (0, common_1.Query)('admin_name')),
    __param(7, (0, common_1.Query)('start_time')),
    __param(8, (0, common_1.Query)('end_time')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String, Number, Number, String, String, String]),
    __metadata("design:returntype", void 0)
], InstructionController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('/get-instruction'),
    (0, swagger_1.ApiOperation)({ summary: '获取可用的指令列表' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InstructionController.prototype, "findAllByIsOpen", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiOperation)({ summary: '添加指令' }),
    (0, swagger_1.ApiBody)({ description: '参数', type: create_instruction_dto_1.CreateInstructionDto }),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_instruction_dto_1.CreateInstructionDto]),
    __metadata("design:returntype", Promise)
], InstructionController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '修改指令' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: '指令ID' }),
    (0, swagger_1.ApiBody)({ description: '修改指令', type: create_instruction_dto_1.CreateInstructionDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_instruction_dto_1.CreateInstructionDto]),
    __metadata("design:returntype", Promise)
], InstructionController.prototype, "updateInstruction", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiOperation)({ summary: '删除指令' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: '指令Id,多个逗号分割' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InstructionController.prototype, "remove", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiOperation)({ summary: '修改指令状态' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: '指令Id' }),
    (0, swagger_1.ApiParam)({ name: 'is_open', description: ' 指令状态 1启用0禁用' }),
    (0, common_1.Patch)(':id/is_open'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('is_open')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], InstructionController.prototype, "updateStatus", null);
exports.InstructionController = InstructionController = __decorate([
    (0, common_1.Controller)('instruction'),
    __metadata("design:paramtypes", [instruction_service_1.InstructionService,
        common_1.Logger])
], InstructionController);
//# sourceMappingURL=instruction.controller.js.map