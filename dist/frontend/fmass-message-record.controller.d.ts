import { MassMessageRecordService } from '../service/masss-message-record.service';
import { UpdateMassMessageRecordDto } from 'src/dto/update-mass-message-record.dto';
export declare class fMassMessageRecordController {
    private readonly MassMessageRecordService;
    constructor(MassMessageRecordService: MassMessageRecordService);
    findAll(): Promise<import("../common/api-response-return").ApiResponseReturn<import("../entity/mass-message-record.entity").MassMessageRecord[]>>;
    update(updateMassMessageRecordDto: UpdateMassMessageRecordDto): Promise<import("../common/api-response-return").ApiResponseReturn<string>>;
}
