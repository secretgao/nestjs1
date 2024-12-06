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
exports.CustomerManage = void 0;
const typeorm_1 = require("typeorm");
let CustomerManage = class CustomerManage {
};
exports.CustomerManage = CustomerManage;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ unsigned: true, comment: '客户id' }),
    __metadata("design:type", Number)
], CustomerManage.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true, comment: '客户简称' }),
    __metadata("design:type", String)
], CustomerManage.prototype, "abbreviation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'smallint', unsigned: true, default: 0, comment: '客户状态 1启用0禁用' }),
    __metadata("design:type", Number)
], CustomerManage.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true, comment: '登录帐号' }),
    __metadata("design:type", String)
], CustomerManage.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true, comment: '登录密码' }),
    __metadata("design:type", String)
], CustomerManage.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true, comment: '客户对接人' }),
    __metadata("design:type", String)
], CustomerManage.prototype, "contact_person", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true, comment: '客户公司名称' }),
    __metadata("design:type", String)
], CustomerManage.prototype, "customer_company_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true, comment: '联系电话' }),
    __metadata("design:type", String)
], CustomerManage.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, comment: '公司地址' }),
    __metadata("design:type", String)
], CustomerManage.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true, comment: '行业类别' }),
    __metadata("design:type", String)
], CustomerManage.prototype, "industry_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, comment: '备注' }),
    __metadata("design:type", String)
], CustomerManage.prototype, "remark", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', nullable: true, comment: '创建时间' }),
    __metadata("design:type", Date)
], CustomerManage.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', nullable: true, comment: '更新时间' }),
    __metadata("design:type", Date)
], CustomerManage.prototype, "updated_at", void 0);
exports.CustomerManage = CustomerManage = __decorate([
    (0, typeorm_1.Entity)('customer_manage')
], CustomerManage);
//# sourceMappingURL=customer_manage.entity.js.map