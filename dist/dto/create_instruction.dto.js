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
exports.CreateInstructionDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateInstructionDto {
}
exports.CreateInstructionDto = CreateInstructionDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '指令名称' }),
    (0, class_validator_1.IsNotEmpty)({ message: '指令名称不能为空' }),
    (0, class_validator_1.IsString)({ message: '管指令名称必须是字符串' }),
    __metadata("design:type", String)
], CreateInstructionDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '指令版本号' }),
    (0, class_validator_1.IsNotEmpty)({ message: '指令版本号不能为空' }),
    (0, class_validator_1.IsString)({ message: '指令版本号必须是字符串' }),
    __metadata("design:type", String)
], CreateInstructionDto.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '触发方式' }),
    (0, class_validator_1.IsNotEmpty)({ message: '触发方式不能为空' }),
    (0, class_validator_1.IsString)({ message: '触发方式必须是字符串' }),
    __metadata("design:type", String)
], CreateInstructionDto.prototype, "trigger_mode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '开关 1开0关' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(1),
    __metadata("design:type", Number)
], CreateInstructionDto.prototype, "is_open", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '创建时间' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateInstructionDto.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '到期时间' }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateInstructionDto.prototype, "expire_at", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateInstructionDto.prototype, "updated_at", void 0);
//# sourceMappingURL=create_instruction.dto.js.map