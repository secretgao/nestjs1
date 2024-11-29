import { OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { GroupService } from './group.service';
export declare class WechatyService implements OnModuleInit, OnModuleDestroy {
    private readonly GroupService;
    private readonly logger;
    private bot;
    constructor(GroupService: GroupService, logger: Logger);
    onModuleInit(): void;
    onModuleDestroy(): void;
    getRooms(): Promise<any[]>;
    getRooms1(): Promise<any>;
    sendMessageToRoom(roomId: string, message: string): Promise<void>;
    sendMessagesToMultipleRooms(roomIds: string, message: string): Promise<void>;
    private sleep;
}
