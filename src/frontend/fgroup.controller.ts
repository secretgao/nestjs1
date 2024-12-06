import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { GroupService } from '../service/group.service';
import { CreateGroupDto } from '../dto/create-group.dto';
 
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';

@Controller('fgroups')
export class FGroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  async createGroups(@Body('data') data: { list: CreateGroupDto[] }) {
    return this.groupService.createOrUpdateGroups(data.list);
  }
}