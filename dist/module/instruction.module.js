"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstructionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const instruction_service_1 = require("../service/instruction.service");
const instruction_controller_1 = require("../backend/instruction.controller");
const instruction_entity_1 = require("../entity/instruction.entity");
const auth_guard_1 = require("../guard/auth_guard");
const auth_service_1 = require("../service/auth.service");
let InstructionModule = class InstructionModule {
};
exports.InstructionModule = InstructionModule;
exports.InstructionModule = InstructionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([instruction_entity_1.Instruction])],
        providers: [instruction_service_1.InstructionService, auth_guard_1.AuthGuard, auth_service_1.AuthService],
        controllers: [instruction_controller_1.InstructionController],
    })
], InstructionModule);
//# sourceMappingURL=instruction.module.js.map