import { Logger } from '@nestjs/common';
import { InstructionService } from '../service/instruction.service';
import { CreateInstructionDto } from '../dto/create-instruction.dto';
export declare class InstructionController {
    private readonly InstructionService;
    private readonly logger;
    constructor(InstructionService: InstructionService, logger: Logger);
    findAll(page?: number, limit?: number, name?: string, code?: string, id?: number, is_open?: number, admin_name?: string, start_time?: string, end_time?: string): Promise<import("../common/api-response-return").ApiResponseReturn<any>>;
    findAllByIsOpen(): Promise<import("../common/api-response-return").ApiResponseReturn<any>>;
    create(InstructionDto: CreateInstructionDto): Promise<import("../common/api-response-return").ApiResponseReturn<null>>;
    updateInstruction(id: number, InstructionDto: CreateInstructionDto): Promise<import("../common/api-response-return").ApiResponseReturn<null>>;
    remove(id: string): Promise<import("../common/api-response-return").ApiResponseReturn<null>>;
    updateStatus(id: string, is_open: number): Promise<import("../common/api-response-return").ApiResponseReturn<unknown>>;
}
