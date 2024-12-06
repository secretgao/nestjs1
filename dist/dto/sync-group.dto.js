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
exports.SyncGroupDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class SyncGroupDto {
}
exports.SyncGroupDto = SyncGroupDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '微信群组Id' }),
    (0, class_validator_1.IsNotEmpty)({ message: '微信群组Id不能为空' }),
    (0, class_validator_1.IsString)({ message: '微信群组Id必须是字符串' }),
    __metadata("design:type", String)
], SyncGroupDto.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '微信群组名称' }),
    (0, class_validator_1.IsNotEmpty)({ message: '微信群组名称不能为空' }),
    (0, class_validator_1.IsString)({ message: '微信群组名称必须是字符串' }),
    __metadata("design:type", String)
], SyncGroupDto.prototype, "topic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '微信群组分类' }),
    (0, class_validator_1.IsNotEmpty)({ message: '微信群组名称不能为空' }),
    (0, class_validator_1.IsString)({ message: '微信群组名称必须是字符串' }),
    __metadata("design:type", String)
], SyncGroupDto.prototype, "tat", void 0);
//# sourceMappingURL=sync-group.dto.js.map