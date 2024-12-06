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
exports.Instruction = void 0;
const typeorm_1 = require("typeorm");
let Instruction = class Instruction {
};
exports.Instruction = Instruction;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', unsigned: true }),
    __metadata("design:type", Number)
], Instruction.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true, comment: '指令名称' }),
    __metadata("design:type", String)
], Instruction.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'smallint', default: 1, comment: '开关,1/0' }),
    __metadata("design:type", Number)
], Instruction.prototype, "is_open", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)', comment: '创建时间' }),
    __metadata("design:type", Date)
], Instruction.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)', comment: '更新时间' }),
    __metadata("design:type", Date)
], Instruction.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true, comment: '标识码' }),
    __metadata("design:type", String)
], Instruction.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true, comment: '操作人' }),
    __metadata("design:type", String)
], Instruction.prototype, "admin_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', unsigned: true, nullable: true, comment: '操作人id' }),
    __metadata("design:type", Number)
], Instruction.prototype, "admin_id", void 0);
exports.Instruction = Instruction = __decorate([
    (0, typeorm_1.Entity)('instruction')
], Instruction);
//# sourceMappingURL=instruction.entity.js.map