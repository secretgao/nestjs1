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
const api_response_return_1 = require("../common/api-response-return");
let InstructionService = class InstructionService {
    constructor(InstructionRepository, logger) {
        this.InstructionRepository = InstructionRepository;
        this.logger = logger;
        this.logger.log('instruction service init');
    }
    formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }
    async findAll(paginationQuery) {
        const { page, limit, name, code, id, is_open, admin_name, start_time, end_time } = paginationQuery;
        const queryBuilder = this.InstructionRepository.createQueryBuilder('instruction');
        if (name) {
            queryBuilder.andWhere('instruction.name LIKE :name', { name: `%${name}%` });
        }
        if (admin_name) {
            queryBuilder.andWhere('instruction.admin_name=:admin_name', { admin_name });
        }
        if (id) {
            queryBuilder.andWhere('instruction.id = :id', { id });
        }
        if (is_open) {
            queryBuilder.andWhere('instruction.is_open = :is_open', { is_open });
        }
        if (start_time) {
            queryBuilder.andWhere('instruction.created_at >= :start_time', { start_time });
        }
        if (end_time) {
            queryBuilder.andWhere('instruction.created_at <:end_time', { end_time });
        }
        if (code) {
            queryBuilder.andWhere('instruction.code = :code', { code });
        }
        queryBuilder.orderBy('instruction.id', 'DESC');
        queryBuilder.skip((page - 1) * limit).take(limit);
        const [data, total] = await queryBuilder.getManyAndCount();
        return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.OK, '获取成功', { data, total });
    }
    async create(InstructionDto) {
        const { name } = InstructionDto;
        const existingInstruction = await this.InstructionRepository.findOne({ where: { name } });
        if (existingInstruction) {
            throw new common_1.HttpException('指令名称已存在', common_1.HttpStatus.CONFLICT);
        }
        const createdAt = new Date();
        const formattedCreatedAt = this.formatDate(createdAt);
        const newInstruction = this.InstructionRepository.create({
            ...InstructionDto,
            created_at: formattedCreatedAt,
            updated_at: formattedCreatedAt
        });
        await this.InstructionRepository.save(newInstruction);
        return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.OK, '添加成功');
    }
    async updateInstruction(id, InstructionDto) {
        const existingInstructionById = await this.InstructionRepository.findOne({ where: { id } });
        if (!existingInstructionById) {
            throw new common_1.NotFoundException('要更新的指令不存在');
        }
        const { name } = InstructionDto;
        const existingInstructionByName = await this.InstructionRepository.findOne({ where: { name } });
        if (existingInstructionByName && existingInstructionByName.id != id) {
            throw new common_1.HttpException('指令名称已存在', common_1.HttpStatus.CONFLICT);
        }
        const updatedAt = new Date();
        const formattedUpdatedAt = this.formatDate(updatedAt);
        const updateData = {
            ...InstructionDto,
            updated_at: formattedUpdatedAt,
        };
        const result = await this.InstructionRepository.update(id, updateData);
        this.logger.log('修改指令');
        this.logger.log(updateData);
        if (result && result.affected == 1) {
            return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.OK, '修改成功');
        }
        throw new common_1.HttpException('更新失败', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
    async remove(id) {
        await this.InstructionRepository.delete(id);
        return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.OK, '删除成功');
    }
    async updateStatus(id, is_open) {
        const info = await this.findOne(id);
        if (!info) {
            return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.NOT_FOUND, '未找到数据');
        }
        await this.InstructionRepository.update(id, { is_open });
        return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.OK, '更新成功');
    }
    findOne(id) {
        return this.InstructionRepository.findOne({ where: { id } });
    }
    async findAllByIsOpen() {
        const is_open = 1;
        const queryBuilder = this.InstructionRepository.createQueryBuilder('instruction');
        queryBuilder
            .select(['instruction.id', 'instruction.name'])
            .andWhere('instruction.is_open = :is_open', { is_open });
        const [data,] = await queryBuilder.getManyAndCount();
        return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.OK, '获取成功', { data });
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