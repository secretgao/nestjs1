import { MassMessageRecordService } from '../service/masss-message-record.service';
import { CreateMassMessageRecordDto } from 'src/dto/create-mass-message-record.dto';
export declare class BMassMessageRecordController {
    private readonly MassMessageRecordService;
    constructor(MassMessageRecordService: MassMessageRecordService);
    findAll(): Promise<import("../common/api-response-return").ApiResponseReturn<import("../entity/mass-message-record.entity").MassMessageRecord[]>>;
    create(CreateMassMessageRecordDto: CreateMassMessageRecordDto): Promise<import("../common/api-response-return").ApiResponseReturn<null>>;
}
