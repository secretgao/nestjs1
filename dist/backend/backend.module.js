"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackendModule = void 0;
const common_1 = require("@nestjs/common");
const admin_users_module_1 = require("../module/admin_users.module");
const instruction_module_1 = require("../module/instruction.module");
const wechaty_module_1 = require("../module/wechaty.module");
let BackendModule = class BackendModule {
};
exports.BackendModule = BackendModule;
exports.BackendModule = BackendModule = __decorate([
    (0, common_1.Module)({
        imports: [
            admin_users_module_1.AdminUsersModule,
            instruction_module_1.InstructionModule,
            wechaty_module_1.WechatyModule
        ],
        providers: [],
    })
], BackendModule);
//# sourceMappingURL=backend.module.js.map