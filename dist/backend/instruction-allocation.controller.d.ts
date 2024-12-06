import { Logger } from '@nestjs/common';
import { InstructionAllocationService } from '../service/instruction-allocation.service';
import { CreateInstructionAllocationDto } from '../dto/create-instruction-allocation.dto';
export declare class InstructionAllocationController {
    private readonly InstructionAllocationService;
    private readonly logger;
    constructor(InstructionAllocationService: InstructionAllocationService, logger: Logger);
    findAll(page?: number, limit?: number, customer_name?: string, allocation_number?: string, instruction_name?: string, start_time?: string, end_time?: string): Promise<import("../common/api-response-return").ApiResponseReturn<any>>;
    create(InstructionAllocationDto: CreateInstructionAllocationDto): Promise<import("../common/api-response-return").ApiResponseReturn<null>>;
    updateInstruction(id: number, InstructionAllocationDto: CreateInstructionAllocationDto): Promise<import("../common/api-response-return").ApiResponseReturn<null>>;
    remove(id: string): Promise<import("../common/api-response-return").ApiResponseReturn<null>>;
}
