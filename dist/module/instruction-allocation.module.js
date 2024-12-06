"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstructionAllocationModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const instruction_allocation_service_1 = require("../service/instruction-allocation.service");
const instruction_allocation_controller_1 = require("../backend/instruction-allocation.controller");
const instruction_allocation_entity_1 = require("../entity/instruction_allocation.entity");
const auth_guard_1 = require("../guard/auth_guard");
const auth_service_1 = require("../service/auth.service");
let InstructionAllocationModule = class InstructionAllocationModule {
};
exports.InstructionAllocationModule = InstructionAllocationModule;
exports.InstructionAllocationModule = InstructionAllocationModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([instruction_allocation_entity_1.InstructionAllocation])],
        providers: [instruction_allocation_service_1.InstructionAllocationService, auth_guard_1.AuthGuard, auth_service_1.AuthService],
        controllers: [instruction_allocation_controller_1.InstructionAllocationController],
    })
], InstructionAllocationModule);
//# sourceMappingURL=instruction-allocation.module.js.map