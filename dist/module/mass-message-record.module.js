"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MassMessageRecordModules = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const masss_message_record_service_1 = require("../service/masss-message-record.service");
const bmass_message_record_controller_1 = require("../backend/bmass-message-record.controller");
const fmass_message_record_controller_1 = require("../frontend/fmass-message-record.controller");
const mass_message_record_entity_1 = require("../entity/mass-message-record.entity");
let MassMessageRecordModules = class MassMessageRecordModules {
};
exports.MassMessageRecordModules = MassMessageRecordModules;
exports.MassMessageRecordModules = MassMessageRecordModules = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([mass_message_record_entity_1.MassMessageRecord])],
        providers: [masss_message_record_service_1.MassMessageRecordService],
        controllers: [fmass_message_record_controller_1.fMassMessageRecordController, bmass_message_record_controller_1.BMassMessageRecordController],
    })
], MassMessageRecordModules);
//# sourceMappingURL=mass-message-record.module.js.map