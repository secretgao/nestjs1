"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeywordsReplyModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const keywords_reply_entity_1 = require("../entity/keywords-reply.entity");
const keyworlds_reply_service_1 = require("../service/keyworlds-reply.service");
const bkeywords_reply_controller_1 = require("../backend/bkeywords-reply.controller");
const fkeywords_reply_controller_1 = require("../frontend/fkeywords-reply.controller");
let KeywordsReplyModule = class KeywordsReplyModule {
};
exports.KeywordsReplyModule = KeywordsReplyModule;
exports.KeywordsReplyModule = KeywordsReplyModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([keywords_reply_entity_1.KeywordsReply])],
        providers: [keyworlds_reply_service_1.KeywordsReplyService],
        controllers: [bkeywords_reply_controller_1.BKeywordsReplyController, fkeywords_reply_controller_1.FKeywordsReplyController]
    })
], KeywordsReplyModule);
//# sourceMappingURL=keywords-reply.module.js.map