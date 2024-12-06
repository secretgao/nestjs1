import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InstructionAllocation } from '../entity/instruction_allocation.entity';
import { CreateInstructionAllocationDto } from '../dto/create-instruction-allocation.dto';
import { ApiResponseReturn } from '../common/api-response-return';
export declare class InstructionAllocationService {
    private InstructionAllocationRepository;
    private readonly logger;
    constructor(InstructionAllocationRepository: Repository<InstructionAllocation>, logger: Logger);
    formatDate(date: Date, format: string): string;
    findAll(paginationQuery: {
        page: number;
        limit: number;
        customer_name?: string;
        allocation_number?: string;
        instruction_name?: string;
        start_time?: string;
        end_time?: string;
    }): Promise<ApiResponseReturn<any>>;
    create(InstructionAllocationDto: CreateInstructionAllocationDto): Promise<ApiResponseReturn<null>>;
    updateInstruction(id: number, InstructionAllocationDto: CreateInstructionAllocationDto): Promise<ApiResponseReturn<null>>;
    remove(id: number[]): Promise<ApiResponseReturn<null>>;
}
