import { WechatyService } from '../service/wechaty.service';
import { GroupService } from 'src/service/group.service';
export declare class WechatyController {
    private readonly wechatyService;
    private readonly groupService;
    constructor(wechatyService: WechatyService, groupService: GroupService);
    getRooms(): Promise<{
        status: string;
        rooms: any[];
    }>;
    getRooms1(): Promise<{
        status: string;
        rooms: any;
    }>;
    broadcastMessage(body: {
        roomId: string;
        message: string;
    }): Promise<{
        status: string;
        message: string;
    }>;
}
