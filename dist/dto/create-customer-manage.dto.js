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
exports.CreateCustomerManageDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateCustomerManageDto {
    constructor() {
        this.status = 0;
    }
}
exports.CreateCustomerManageDto = CreateCustomerManageDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '客户简称' }),
    (0, class_validator_1.IsNotEmpty)({ message: '客户简称不能为空' }),
    (0, class_validator_1.IsString)({ message: '客户简称必须是字符串' }),
    __metadata("design:type", String)
], CreateCustomerManageDto.prototype, "abbreviation", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateCustomerManageDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '登录帐号' }),
    (0, class_validator_1.IsNotEmpty)({ message: '登录帐号不能为空' }),
    (0, class_validator_1.IsString)({ message: '登录帐号必须是字符串' }),
    __metadata("design:type", String)
], CreateCustomerManageDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '客户对接人' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCustomerManageDto.prototype, "contact_person", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '客户公司名称' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCustomerManageDto.prototype, "customer_company_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '联系电话' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCustomerManageDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '公司地址' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCustomerManageDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '行业类别' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCustomerManageDto.prototype, "industry_category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '备注' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCustomerManageDto.prototype, "remark", void 0);
//# sourceMappingURL=create-customer-manage.dto.js.map