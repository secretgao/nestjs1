import { Logger } from '@nestjs/common';
import { GroupService } from '../service/group.service';
import { SendGroupMessageDto } from '../dto/send_group_message.dto';
export declare class GroupController {
    private readonly GroupService;
    private readonly logger;
    constructor(GroupService: GroupService, logger: Logger);
    list(PaginationDto: any): Promise<{
        data: import("../entity/group.entity").Group[];
        total: number;
        page: number;
        limit: number;
    }>;
    sendGroupMessage(SendGroupMessageDto: SendGroupMessageDto): Promise<{
        token: void;
    }>;
}
