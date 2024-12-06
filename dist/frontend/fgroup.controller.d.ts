import { GroupService } from '../service/group.service';
import { CreateGroupDto } from '../dto/create-group.dto';
export declare class FGroupController {
    private readonly groupService;
    constructor(groupService: GroupService);
    createGroups(data: {
        list: CreateGroupDto[];
    }): Promise<import("../entity/group.entity").Group[]>;
}
