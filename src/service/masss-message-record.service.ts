import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MassMessageRecord } from '../entity/mass-message-record.entity';
import { CreateMassMessageRecordDto } from '../dto/create-mass-message-record.dto';
import { UpdateMassMessageRecordDto } from '../dto/update-mass-message-record.dto';
import { ApiResponseReturn } from 'src/common/api-response-return';

@Injectable()
export class MassMessageRecordService {
  constructor(
    @InjectRepository(MassMessageRecord)
    private readonly massMessageRecordRepository: Repository<MassMessageRecord>,
  ) {}

  async create(createMassMessageRecordDto: CreateMassMessageRecordDto): Promise<ApiResponseReturn<null>> {
    const wxIds = createMassMessageRecordDto.wx_id.split(',').map(wx_id => wx_id.trim());
    const records = wxIds.map(wx_id => {
      const newRecord = this.massMessageRecordRepository.create({ ...createMassMessageRecordDto, wx_id });
      return newRecord;
    });
    this.massMessageRecordRepository.save(records);
    return new ApiResponseReturn(HttpStatus.OK, '添加成功');
  }

  async update(updateMassMessageRecordDto: UpdateMassMessageRecordDto) :Promise<ApiResponseReturn<string>> {
    const { wx_id } = updateMassMessageRecordDto;
    const existingRecord = await this.massMessageRecordRepository.findOne({where:{wx_id}});
    if (!existingRecord) {
      throw new NotFoundException(`微信任务记录 wx_id ${wx_id} 不存在`);
    }
    const updatedRecord = Object.assign(existingRecord, updateMassMessageRecordDto);
    const result = await this.massMessageRecordRepository.save(updatedRecord);

    if (result) {
      return new ApiResponseReturn(HttpStatus.OK, '更新成功', result.id.toString());
    }
   
    throw new HttpException('更新失败', HttpStatus.INTERNAL_SERVER_ERROR);
  }

  async findUnSendMessage() {
    const data = await this.massMessageRecordRepository.find({
      where:{is_send:0},
      select:['wx_id','message'],
    })
    
    return new ApiResponseReturn(HttpStatus.OK, '获取成功',data);
  }

  async findAll() {
    const data = await this.massMessageRecordRepository.find()
    return new ApiResponseReturn(HttpStatus.OK, '获取成功',data);
  }
}