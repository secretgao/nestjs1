import { Injectable, HttpException, HttpStatus, Body ,Logger} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from '../entity/group.entity';
import { CreateGroupDto } from '../dto/create-group.dto';
import { ApiResponseReturn } from '../common/api-response-return';
@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private groupRepository: Repository<Group>,
    private readonly logger:Logger     //使用日志
  ) {}

  async createOrUpdateGroup(createGroupDto: CreateGroupDto): Promise<Group> {
    let group = await this.groupRepository.findOne({ where: { wx_id: createGroupDto.wx_id } });
    const currentTime = new Date();
    if (group) {
      // 更新已有记录
      group.nick_name = createGroupDto.nick_name;
      group.updated_at = currentTime;
      // 根据需要更新其他字段
    } else {
      // 插入新记录
      group = this.groupRepository.create(createGroupDto);
      group.tag = ''; // 这里你可以根据需要设置标签
      group.created_at = currentTime;
    }

    return this.groupRepository.save(group);
  }

  async createOrUpdateGroups(createGroupDtos: CreateGroupDto[]): Promise<Group[]> {
    this.logger.debug('sync group');
    this.logger.debug(createGroupDtos);
    const groups = await Promise.all(createGroupDtos.map(async dto => {
      return this.createOrUpdateGroup(dto);
    }));

    return groups;
  }
}