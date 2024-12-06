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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMassMessageRecordDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateMassMessageRecordDto {
}
exports.CreateMassMessageRecordDto = CreateMassMessageRecordDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '微信群聊id' }),
    (0, class_validator_1.IsNotEmpty)({ message: '微信群聊id不能为空' }),
    (0, class_validator_1.IsString)({ message: '微信群聊id必须是字符串' }),
    __metadata("design:type", String)
], CreateMassMessageRecordDto.prototype, "wx_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '群发消息' }),
    (0, class_validator_1.IsNotEmpty)({ message: '群发消息不能为空' }),
    (0, class_validator_1.IsString)({ message: '群发消息必须是字符串' }),
    __metadata("design:type", String)
], CreateMassMessageRecordDto.prototype, "message", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(1),
    __metadata("design:type", Number)
], CreateMassMessageRecordDto.prototype, "is_send", void 0);
//# sourceMappingURL=create-mass-message-record.dto.js.map