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
exports.AdminUsers = void 0;
const typeorm_1 = require("typeorm");
let AdminUsers = class AdminUsers {
};
exports.AdminUsers = AdminUsers;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ unsigned: true }),
    __metadata("design:type", Number)
], AdminUsers.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true, comment: '用户名' }),
    __metadata("design:type", String)
], AdminUsers.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, nullable: true, comment: '密码' }),
    __metadata("design:type", String)
], AdminUsers.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, comment: '访问令牌' }),
    __metadata("design:type", String)
], AdminUsers.prototype, "access_token", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)', comment: '创建时间' }),
    __metadata("design:type", Date)
], AdminUsers.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)', comment: '更新时间' }),
    __metadata("design:type", Date)
], AdminUsers.prototype, "updated_at", void 0);
exports.AdminUsers = AdminUsers = __decorate([
    (0, typeorm_1.Entity)('admin_users')
], AdminUsers);
//# sourceMappingURL=admin_user.entity.js.map