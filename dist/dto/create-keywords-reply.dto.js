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
exports.CreateKeywordsReplyDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateKeywordsReplyDto {
}
exports.CreateKeywordsReplyDto = CreateKeywordsReplyDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '回复关键词' }),
    (0, class_validator_1.IsNotEmpty)({ message: '请输入回复关键词' }),
    __metadata("design:type", String)
], CreateKeywordsReplyDto.prototype, "keywords", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '回复关内容' }),
    (0, class_validator_1.IsNotEmpty)({ message: '请输入回复内容' }),
    __metadata("design:type", String)
], CreateKeywordsReplyDto.prototype, "reply", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '开关 1开0关' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(1),
    __metadata("design:type", Number)
], CreateKeywordsReplyDto.prototype, "is_open", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '是否精准匹配 1开0关' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(1),
    __metadata("design:type", Number)
], CreateKeywordsReplyDto.prototype, "is_accureate", void 0);
//# sourceMappingURL=create-keywords-reply.dto.js.map