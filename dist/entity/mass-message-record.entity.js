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
exports.MassMessageRecord = void 0;
const typeorm_1 = require("typeorm");
let MassMessageRecord = class MassMessageRecord {
};
exports.MassMessageRecord = MassMessageRecord;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'int', unsigned: true }),
    __metadata("design:type", Number)
], MassMessageRecord.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, collation: 'utf8mb4_unicode_ci', comment: '微信群id' }),
    __metadata("design:type", String)
], MassMessageRecord.prototype, "wx_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, collation: 'utf8mb4_unicode_ci', comment: '发消息内容' }),
    __metadata("design:type", String)
], MassMessageRecord.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'smallint', unsigned: true, default: 0, comment: '是否发送 1发送0未发送' }),
    __metadata("design:type", Number)
], MassMessageRecord.prototype, "is_send", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)', comment: '创建时间' }),
    __metadata("design:type", Date)
], MassMessageRecord.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)', comment: '更新时间' }),
    __metadata("design:type", Date)
], MassMessageRecord.prototype, "updated_at", void 0);
exports.MassMessageRecord = MassMessageRecord = __decorate([
    (0, typeorm_1.Entity)('mass_message_record')
], MassMessageRecord);
//# sourceMappingURL=mass-message-record.entity.js.map