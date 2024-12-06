import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Group } from '../entity/group.entity';
import { CreateGroupDto } from '../dto/create-group.dto';
export declare class GroupService {
    private groupRepository;
    private readonly logger;
    constructor(groupRepository: Repository<Group>, logger: Logger);
    createOrUpdateGroup(createGroupDto: CreateGroupDto): Promise<Group>;
    createOrUpdateGroups(createGroupDtos: CreateGroupDto[]): Promise<Group[]>;
}
