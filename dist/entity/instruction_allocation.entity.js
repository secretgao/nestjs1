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
exports.InstructionAllocation = void 0;
const typeorm_1 = require("typeorm");
let InstructionAllocation = class InstructionAllocation {
};
exports.InstructionAllocation = InstructionAllocation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'int', unsigned: true }),
    __metadata("design:type", Number)
], InstructionAllocation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', unsigned: true, nullable: false, comment: '客户id' }),
    __metadata("design:type", Number)
], InstructionAllocation.prototype, "customer_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true, comment: '分配单号' }),
    __metadata("design:type", String)
], InstructionAllocation.prototype, "allocation_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true, comment: '客户简称' }),
    __metadata("design:type", String)
], InstructionAllocation.prototype, "customer_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', unsigned: true, nullable: false, comment: '指令id' }),
    __metadata("design:type", Number)
], InstructionAllocation.prototype, "instruction_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true, comment: '指令名称' }),
    __metadata("design:type", String)
], InstructionAllocation.prototype, "instruction_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true, comment: '开始时间' }),
    __metadata("design:type", Date)
], InstructionAllocation.prototype, "start_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true, comment: '到期时间' }),
    __metadata("design:type", Date)
], InstructionAllocation.prototype, "end_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true, comment: '创建时间' }),
    __metadata("design:type", Date)
], InstructionAllocation.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true, comment: '编辑时间' }),
    __metadata("design:type", Date)
], InstructionAllocation.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false, default: '', comment: '备注' }),
    __metadata("design:type", String)
], InstructionAllocation.prototype, "remark", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true, comment: '创建人' }),
    __metadata("design:type", String)
], InstructionAllocation.prototype, "admin_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', unsigned: true, nullable: true, comment: '创建人id' }),
    __metadata("design:type", Number)
], InstructionAllocation.prototype, "admin_id", void 0);
exports.InstructionAllocation = InstructionAllocation = __decorate([
    (0, typeorm_1.Entity)('instruction_allocation')
], InstructionAllocation);
//# sourceMappingURL=instruction_allocation.entity.js.map