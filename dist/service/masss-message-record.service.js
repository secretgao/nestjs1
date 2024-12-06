"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MassMessageRecordService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const mass_message_record_entity_1 = require("../entity/mass-message-record.entity");
const api_response_return_1 = require("../common/api-response-return");
let MassMessageRecordService = class MassMessageRecordService {
    constructor(massMessageRecordRepository) {
        this.massMessageRecordRepository = massMessageRecordRepository;
    }
    async create(createMassMessageRecordDto) {
        const wxIds = createMassMessageRecordDto.wx_id.split(',').map(wx_id => wx_id.trim());
        const records = wxIds.map(wx_id => {
            const newRecord = this.massMessageRecordRepository.create({ ...createMassMessageRecordDto, wx_id });
            return newRecord;
        });
        this.massMessageRecordRepository.save(records);
        return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.OK, '添加成功');
    }
    async update(updateMassMessageRecordDto) {
        const { wx_id } = updateMassMessageRecordDto;
        const existingRecord = await this.massMessageRecordRepository.findOne({ where: { wx_id } });
        if (!existingRecord) {
            throw new common_1.NotFoundException(`微信任务记录 wx_id ${wx_id} 不存在`);
        }
        const updatedRecord = Object.assign(existingRecord, updateMassMessageRecordDto);
        const result = await this.massMessageRecordRepository.save(updatedRecord);
        if (result) {
            return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.OK, '更新成功', result.id.toString());
        }
        throw new common_1.HttpException('更新失败', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
    async findUnSendMessage() {
        const data = await this.massMessageRecordRepository.find({
            where: { is_send: 0 },
            select: ['wx_id', 'message'],
        });
        return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.OK, '获取成功', data);
    }
    async findAll() {
        const data = await this.massMessageRecordRepository.find();
        return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.OK, '获取成功', data);
    }
};
exports.MassMessageRecordService = MassMessageRecordService;
exports.MassMessageRecordService = MassMessageRecordService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(mass_message_record_entity_1.MassMessageRecord)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MassMessageRecordService);
//# sourceMappingURL=masss-message-record.service.js.map