import { Repository } from 'typeorm';
import { MassMessageRecord } from '../entity/mass-message-record.entity';
import { CreateMassMessageRecordDto } from '../dto/create-mass-message-record.dto';
import { UpdateMassMessageRecordDto } from '../dto/update-mass-message-record.dto';
import { ApiResponseReturn } from 'src/common/api-response-return';
export declare class MassMessageRecordService {
    private readonly massMessageRecordRepository;
    constructor(massMessageRecordRepository: Repository<MassMessageRecord>);
    create(createMassMessageRecordDto: CreateMassMessageRecordDto): Promise<ApiResponseReturn<null>>;
    update(updateMassMessageRecordDto: UpdateMassMessageRecordDto): Promise<ApiResponseReturn<string>>;
    findUnSendMessage(): Promise<ApiResponseReturn<MassMessageRecord[]>>;
    findAll(): Promise<ApiResponseReturn<MassMessageRecord[]>>;
}
