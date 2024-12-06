"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUsersModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const admin_users_auth_service_1 = require("../service/admin-users-auth.service");
const adminusers_controller_1 = require("../backend/adminusers.controller");
const admin_user_entity_1 = require("../entity/admin-user.entity");
const auth_guard_1 = require("../guard/auth_guard");
const auth_service_1 = require("../service/auth.service");
let AdminUsersModule = class AdminUsersModule {
};
exports.AdminUsersModule = AdminUsersModule;
exports.AdminUsersModule = AdminUsersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([admin_user_entity_1.AdminUsers])],
        providers: [admin_users_auth_service_1.AdminUsersAuthService, auth_guard_1.AuthGuard, auth_service_1.AuthService],
        controllers: [adminusers_controller_1.AdminUsersController],
    })
], AdminUsersModule);
//# sourceMappingURL=admin-users.module.js.map