import { Injectable, HttpException, HttpStatus, Body ,Logger} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from '../entity/group.entity';
import { PaginationDto } from '../dto/pagination.dto';
import {SyncGroupDto} from '../dto/sync_group.dto';
import { ApiResponse } from '../common/api_response';
import { SendGroupMessageDto } from '../dto/send_group_message.dto';
import { WechatyService } from './wechaty.service';
@Injectable()

export class GroupService {
  constructor(
    @InjectRepository(Group)
    private groupRepository: Repository<Group>,
    private readonly logger:Logger,     //使用日志
  
  ) {
    this.logger.log('group service init')
  }

  async findAll(options: PaginationDto): 
  Promise<{ data: Group[]; total: number; page: number; limit: number }> {
    const { page, limit } = options;
    const [data, total] = await this.groupRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      order: {
        id: 'DESC', // Add this line to sort by id in descending order
      },
    });
    return {
      data,
      total,
      page,
      limit,
    };
  }

  //async saveRooms(rooms: { roomId: string; topic: string }[]): Promise<Group[]> {
    async saveRooms(rooms: { roomId: string; topic: string }[]) {
   
    this.logger.log(rooms);
    return rooms;
    /*
      // 获取所有的 roomId
    const existingRooms = await this.groupRepository.find({
      select: ['roomId'],
    });

    // 提取已有的 roomId
    const existingRoomIds = new Set(existingRooms.map(room => room.roomId));

    // 过滤掉已经存在的 roomId
    const newRooms = rooms.filter(room => !existingRoomIds.has(room.roomId));
    const roomEntities = newRooms.map(room => {
      return this.groupRepository.create({
        roomId: room.roomId,
        topic: room.topic,
      });
    });
    return this.groupRepository.save(roomEntities);
    */
  }
 


  // 更新数据
  async updateInstruction(id: string) :Promise<ApiResponse<string>>  {
    //const { name } = InstructionDto;
    /*
    const existingInstruction = await this.groupRepository.findOne({ where: { name } });

    if (existingInstruction) {
      throw new HttpException('指令名称已存在', HttpStatus.CONFLICT);
    }

  
    const result = await this.groupRepository.update(id, InstructionDto);
    this.logger.log('修改指令')
    this.logger.log(result)
    if (result && result.affected == 1 ){
      return new ApiResponse(HttpStatus.OK, '修改成功',result.affected.toString());
    }
    throw new HttpException('更新失败', HttpStatus.INTERNAL_SERVER_ERROR);
    */
    throw new HttpException('更新失败', HttpStatus.INTERNAL_SERVER_ERROR);
  }

  async sendGroupMessage(SendGroupMessageDto:SendGroupMessageDto){
    const {roomId,message} =SendGroupMessageDto;
   // const result =  await this.wechatyService.sendMessagesToMultipleRooms(roomId,message);

  //  return result;
  }
}