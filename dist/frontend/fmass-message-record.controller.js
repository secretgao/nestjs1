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
exports.fMassMessageRecordController = void 0;
const common_1 = require("@nestjs/common");
const masss_message_record_service_1 = require("../service/masss-message-record.service");
const update_mass_message_record_dto_1 = require("../dto/update-mass-message-record.dto");
const swagger_1 = require("@nestjs/swagger");
let fMassMessageRecordController = class fMassMessageRecordController {
    constructor(MassMessageRecordService) {
        this.MassMessageRecordService = MassMessageRecordService;
    }
    findAll() {
        return this.MassMessageRecordService.findUnSendMessage();
    }
    async update(updateMassMessageRecordDto) {
        return this.MassMessageRecordService.update(updateMassMessageRecordDto);
    }
};
exports.fMassMessageRecordController = fMassMessageRecordController;
__decorate([
    (0, common_1.Get)('/unsend-message-record'),
    (0, swagger_1.ApiOperation)({ summary: '获取未完成群发的消息任务' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], fMassMessageRecordController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/send_success_callback'),
    (0, swagger_1.ApiOperation)({ summary: '发送成功的消息更新成成功' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_mass_message_record_dto_1.UpdateMassMessageRecordDto]),
    __metadata("design:returntype", Promise)
], fMassMessageRecordController.prototype, "update", null);
exports.fMassMessageRecordController = fMassMessageRecordController = __decorate([
    (0, common_1.Controller)('fmass-message-record'),
    __metadata("design:paramtypes", [masss_message_record_service_1.MassMessageRecordService])
], fMassMessageRecordController);
//# sourceMappingURL=fmass-message-record.controller.js.map