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
exports.CreateInstructionAllocationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateInstructionAllocationDto {
}
exports.CreateInstructionAllocationDto = CreateInstructionAllocationDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '客户id' }),
    (0, class_validator_1.IsNotEmpty)({ message: '客户id不能为空' }),
    (0, class_validator_1.IsInt)({ message: '客户id必须是数字' }),
    __metadata("design:type", Number)
], CreateInstructionAllocationDto.prototype, "customer_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '客户简称' }),
    (0, class_validator_1.IsNotEmpty)({ message: '客户简称不能为空' }),
    (0, class_validator_1.IsString)({ message: '客户简称必须是字符串' }),
    __metadata("design:type", String)
], CreateInstructionAllocationDto.prototype, "customer_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '指令id' }),
    (0, class_validator_1.IsNotEmpty)({ message: '指令id不能为空' }),
    (0, class_validator_1.IsInt)({ message: '指令id必须是数字' }),
    __metadata("design:type", Number)
], CreateInstructionAllocationDto.prototype, "instruction_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '指令名称' }),
    (0, class_validator_1.IsNotEmpty)({ message: '指令名称不能为空' }),
    (0, class_validator_1.IsString)({ message: '指令名称必须是字符串' }),
    __metadata("design:type", String)
], CreateInstructionAllocationDto.prototype, "instruction_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '指令开始时间' }),
    (0, class_validator_1.IsNotEmpty)({ message: '指令开始时间不能为空' }),
    (0, class_validator_1.IsString)({ message: '指令开始时间必须是字符串' }),
    __metadata("design:type", String)
], CreateInstructionAllocationDto.prototype, "start_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '指令结束时间' }),
    (0, class_validator_1.IsNotEmpty)({ message: '指令结束时间不能为空' }),
    (0, class_validator_1.IsString)({ message: '指令结束时间必须是字符串' }),
    __metadata("design:type", String)
], CreateInstructionAllocationDto.prototype, "end_time", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreateInstructionAllocationDto.prototype, "created_at", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInstructionAllocationDto.prototype, "remark", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInstructionAllocationDto.prototype, "admin_name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateInstructionAllocationDto.prototype, "admin_id", void 0);
//# sourceMappingURL=create-instruction-allocation.dto.js.map