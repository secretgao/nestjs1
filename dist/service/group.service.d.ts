import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Group } from '../entity/group.entity';
import { PaginationDto } from '../dto/pagination.dto';
import { ApiResponse } from '../common/api_response';
import { SendGroupMessageDto } from '../dto/send_group_message.dto';
export declare class GroupService {
    private groupRepository;
    private readonly logger;
    constructor(groupRepository: Repository<Group>, logger: Logger);
    findAll(options: PaginationDto): Promise<{
        data: Group[];
        total: number;
        page: number;
        limit: number;
    }>;
    saveRooms(rooms: {
        roomId: string;
        topic: string;
    }[]): Promise<{
        roomId: string;
        topic: string;
    }[]>;
    updateInstruction(id: string): Promise<ApiResponse<string>>;
    sendGroupMessage(SendGroupMessageDto: SendGroupMessageDto): Promise<void>;
}
