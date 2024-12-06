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
exports.UpdateAdminPasswordDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateAdminPasswordDto {
}
exports.UpdateAdminPasswordDto = UpdateAdminPasswordDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '管理员密码' }),
    (0, class_validator_1.IsString)({ message: '管理员密码必须是字符串' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateAdminPasswordDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '昵称' }),
    (0, class_validator_1.IsString)({ message: '昵称' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateAdminPasswordDto.prototype, "nickname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '备注' }),
    (0, class_validator_1.IsString)({ message: '备注' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateAdminPasswordDto.prototype, "remark", void 0);
//# sourceMappingURL=update-admin-users.dto.js.map