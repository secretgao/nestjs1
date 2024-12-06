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
exports.InstructionAllocationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const instruction_allocation_entity_1 = require("../entity/instruction_allocation.entity");
const api_response_return_1 = require("../common/api-response-return");
let InstructionAllocationService = class InstructionAllocationService {
    constructor(InstructionAllocationRepository, logger) {
        this.InstructionAllocationRepository = InstructionAllocationRepository;
        this.logger = logger;
        this.logger.log('instruction service init');
    }
    formatDate(date, format) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        let formattedDate = format;
        formattedDate = formattedDate.replace('y', String(year));
        formattedDate = formattedDate.replace('m', month);
        formattedDate = formattedDate.replace('d', day);
        formattedDate = formattedDate.replace('H', hours);
        formattedDate = formattedDate.replace('i', minutes);
        formattedDate = formattedDate.replace('s', seconds);
        return formattedDate;
    }
    async findAll(paginationQuery) {
        const { page, limit, customer_name, allocation_number, instruction_name, start_time, end_time } = paginationQuery;
        const queryBuilder = this.InstructionAllocationRepository.createQueryBuilder('instruction_allocation');
        if (customer_name) {
            queryBuilder.andWhere('instruction_allocation.customer_name LIKE :customer_name', { customer_name: `%${customer_name}%` });
        }
        if (instruction_name) {
            queryBuilder.andWhere('instruction_allocation.instruction_name=:instruction_name', { instruction_name });
        }
        if (allocation_number) {
            queryBuilder.andWhere('instruction_allocation.allocation_number = :allocation_number', { allocation_number });
        }
        if (start_time) {
            queryBuilder.andWhere('instruction_allocation.created_at >= :start_time', { start_time });
        }
        if (end_time) {
            queryBuilder.andWhere('instruction_allocation.created_at <:end_time', { end_time });
        }
        queryBuilder.orderBy('instruction_allocation.id', 'DESC');
        queryBuilder.skip((page - 1) * limit).take(limit);
        const [old, total] = await queryBuilder.getManyAndCount();
        const data = old.map(item => ({
            ...item,
            created_at: this.formatDate(new Date(item.created_at), 'y-m-d H:i:s'),
            start_time: this.formatDate(new Date(item.start_time), 'y-m-d H:i:s'),
            end_time: this.formatDate(new Date(item.end_time), 'y-m-d H:i:s'),
            updated_at: this.formatDate(new Date(item.updated_at), 'y-m-d H:i:s'),
        }));
        return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.OK, '获取成功', { data, total });
    }
    async create(InstructionAllocationDto) {
        const createdAt = new Date();
        const formattedCreatedAt = this.formatDate(createdAt, 'y-m-d H:i:s');
        const count = await this.InstructionAllocationRepository.createQueryBuilder('instruction_allocation').getCount();
        const allocationNumber = `FP${this.formatDate(createdAt, 'y-m-d')}${String(count + 1).padStart(3, '0')}`;
        const newInstruction = this.InstructionAllocationRepository.create({
            ...InstructionAllocationDto,
            created_at: formattedCreatedAt,
            allocation_number: allocationNumber
        });
        await this.InstructionAllocationRepository.save(newInstruction);
        return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.OK, '添加成功');
    }
    async updateInstruction(id, InstructionAllocationDto) {
        const existingInstructionById = await this.InstructionAllocationRepository.findOne({ where: { id } });
        if (!existingInstructionById) {
            throw new common_1.NotFoundException('要更新的指令不存在');
        }
        const updatedAt = new Date();
        const formattedUpdatedAt = this.formatDate(updatedAt, 'y-m-d H:i:s');
        const updateData = {
            ...InstructionAllocationDto,
            updated_at: formattedUpdatedAt,
        };
        const result = await this.InstructionAllocationRepository.update(id, updateData);
        this.logger.log('修改指令');
        this.logger.log(updateData);
        if (result && result.affected == 1) {
            return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.OK, '修改成功');
        }
        throw new common_1.HttpException('更新失败', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
    async remove(id) {
        await this.InstructionAllocationRepository.delete(id);
        return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.OK, '删除成功');
    }
};
exports.InstructionAllocationService = InstructionAllocationService;
exports.InstructionAllocationService = InstructionAllocationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(instruction_allocation_entity_1.InstructionAllocation)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        common_1.Logger])
], InstructionAllocationService);
//# sourceMappingURL=instruction-allocation.service.js.map