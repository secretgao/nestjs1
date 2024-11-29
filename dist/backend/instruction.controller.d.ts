import { Logger } from '@nestjs/common';
import { InstructionService } from '../service/instruction.service';
import { CreateInstructionDto } from '../dto/create_instruction.dto';
export declare class InstructionController {
    private readonly InstructionService;
    private readonly logger;
    constructor(InstructionService: InstructionService, logger: Logger);
    create(InstructionDto: CreateInstructionDto): Promise<import("../common/api_response").ApiResponse<null>>;
    updateAdmin(id: string, InstructionDto: CreateInstructionDto): Promise<import("../common/api_response").ApiResponse<string>>;
}
