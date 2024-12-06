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
exports.LoginAdminUserDto = exports.CreateAdminUserDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateAdminUserDto {
}
exports.CreateAdminUserDto = CreateAdminUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '管理员帐号' }),
    (0, class_validator_1.IsNotEmpty)({ message: '管理员帐号不能为空' }),
    (0, class_validator_1.IsString)({ message: '管理员帐号必须是字符串' }),
    __metadata("design:type", String)
], CreateAdminUserDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '管理员密码' }),
    (0, class_validator_1.IsString)({ message: '管理员密码必须是字符串' }),
    __metadata("design:type", String)
], CreateAdminUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '用户昵称' }),
    (0, class_validator_1.IsNotEmpty)({ message: '用户昵称不能为空' }),
    (0, class_validator_1.IsString)({ message: '用户昵称必须是字符串' }),
    __metadata("design:type", String)
], CreateAdminUserDto.prototype, "nickname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '备注' }),
    __metadata("design:type", String)
], CreateAdminUserDto.prototype, "remark", void 0);
class LoginAdminUserDto {
}
exports.LoginAdminUserDto = LoginAdminUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '管理员帐号' }),
    (0, class_validator_1.IsNotEmpty)({ message: '管理员帐号不能为空' }),
    (0, class_validator_1.IsString)({ message: '管理员帐号必须是字符串' }),
    __metadata("design:type", String)
], LoginAdminUserDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '管理员密码' }),
    (0, class_validator_1.IsNotEmpty)({ message: '管理员密码不能为空' }),
    (0, class_validator_1.IsString)({ message: '管理员密码必须是字符串' }),
    __metadata("design:type", String)
], LoginAdminUserDto.prototype, "password", void 0);
//# sourceMappingURL=create-admin-users.dto.js.map