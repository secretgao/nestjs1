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
exports.InstructionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const instruction_entity_1 = require("../entity/instruction.entity");
const api_response_1 = require("../common/api_response");
let InstructionService = class InstructionService {
    constructor(InstructionRepository, logger) {
        this.InstructionRepository = InstructionRepository;
        this.logger = logger;
        this.logger.log('instruction service init');
    }
    async findAll(options) {
        const { page, limit } = options;
        const [data, total] = await this.InstructionRepository.findAndCount({
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
    async create(InstructionDto) {
        const { name } = InstructionDto;
        const existingInstruction = await this.InstructionRepository.findOne({ where: { name } });
        if (existingInstruction) {
            throw new common_1.HttpException('指令名称已存在', common_1.HttpStatus.CONFLICT);
        }
        const newInstruction = this.InstructionRepository.create(InstructionDto);
        await this.InstructionRepository.save(newInstruction);
        return new api_response_1.ApiResponse(common_1.HttpStatus.OK, '添加成功');
    }
    async updateInstruction(id, InstructionDto) {
        const { name } = InstructionDto;
        const existingInstruction = await this.InstructionRepository.findOne({ where: { name } });
        if (existingInstruction) {
            throw new common_1.HttpException('指令名称已存在', common_1.HttpStatus.CONFLICT);
        }
        const result = await this.InstructionRepository.update(id, InstructionDto);
        this.logger.log('修改指令');
        this.logger.log(result);
        if (result && result.affected == 1) {
            return new api_response_1.ApiResponse(common_1.HttpStatus.OK, '修改成功', result.affected.toString());
        }
        throw new common_1.HttpException('更新失败', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
};
exports.InstructionService = InstructionService;
exports.InstructionService = InstructionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(instruction_entity_1.Instruction)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        common_1.Logger])
], InstructionService);
//# sourceMappingURL=instruction.service.js.map