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
const create_instruction_dto_1 = require("../dto/create_instruction.dto");
const auth_public_1 = require("../common/auth_public");
const swagger_1 = require("@nestjs/swagger");
let InstructionController = class InstructionController {
    constructor(InstructionService, logger) {
        this.InstructionService = InstructionService;
        this.logger = logger;
        this.logger.log('instruction init');
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
    async updateAdmin(id, InstructionDto) {
        try {
            const result = await this.InstructionService.updateInstruction(id, InstructionDto);
            return result;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.InstructionController = InstructionController;
__decorate([
    (0, auth_public_1.Public)(),
    (0, swagger_1.ApiOperation)({ summary: '添加指令' }),
    (0, swagger_1.ApiBody)({ description: '参数', type: create_instruction_dto_1.CreateInstructionDto }),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_instruction_dto_1.CreateInstructionDto]),
    __metadata("design:returntype", Promise)
], InstructionController.prototype, "create", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '修改指令' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: '指令ID' }),
    (0, swagger_1.ApiBody)({ description: '修改指令', type: create_instruction_dto_1.CreateInstructionDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_instruction_dto_1.CreateInstructionDto]),
    __metadata("design:returntype", Promise)
], InstructionController.prototype, "updateAdmin", null);
exports.InstructionController = InstructionController = __decorate([
    (0, common_1.Controller)('instruction'),
    __metadata("design:paramtypes", [instruction_service_1.InstructionService,
        common_1.Logger])
], InstructionController);
//# sourceMappingURL=instruction.controller.js.map