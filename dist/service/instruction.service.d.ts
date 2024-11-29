import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Instruction } from '../entity/instruction.entity';
import { PaginationDto } from '../dto/pagination.dto';
import { CreateInstructionDto } from '../dto/create_instruction.dto';
import { ApiResponse } from '../common/api_response';
export declare class InstructionService {
    private InstructionRepository;
    private readonly logger;
    constructor(InstructionRepository: Repository<Instruction>, logger: Logger);
    findAll(options: PaginationDto): Promise<{
        data: Instruction[];
        total: number;
        page: number;
        limit: number;
    }>;
    create(InstructionDto: CreateInstructionDto): Promise<ApiResponse<null>>;
    updateInstruction(id: string, InstructionDto: CreateInstructionDto): Promise<ApiResponse<string>>;
}
