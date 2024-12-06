import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Instruction } from '../entity/instruction.entity';
import { CreateInstructionDto } from '../dto/create-instruction.dto';
import { ApiResponseReturn } from '../common/api-response-return';
export declare class InstructionService {
    private InstructionRepository;
    private readonly logger;
    constructor(InstructionRepository: Repository<Instruction>, logger: Logger);
    formatDate(date: Date): string;
    findAll(paginationQuery: {
        page: number;
        limit: number;
        name?: string;
        code?: string;
        id?: number;
        is_open?: number;
        admin_name?: string;
        start_time?: string;
        end_time?: string;
    }): Promise<ApiResponseReturn<any>>;
    create(InstructionDto: CreateInstructionDto): Promise<ApiResponseReturn<null>>;
    updateInstruction(id: number, InstructionDto: CreateInstructionDto): Promise<ApiResponseReturn<null>>;
    remove(id: number[]): Promise<ApiResponseReturn<null>>;
    updateStatus(id: number, is_open: number): Promise<ApiResponseReturn<unknown>>;
    findOne(id: number): Promise<Instruction>;
    findAllByIsOpen(): Promise<ApiResponseReturn<any>>;
}
