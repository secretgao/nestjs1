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
exports.FKeywordsReplyController = void 0;
const common_1 = require("@nestjs/common");
const keyworlds_reply_service_1 = require("../service/keyworlds-reply.service");
let FKeywordsReplyController = class FKeywordsReplyController {
    constructor(keywordsReplyService) {
        this.keywordsReplyService = keywordsReplyService;
    }
    findAll() {
        return this.keywordsReplyService.FfindAll();
    }
};
exports.FKeywordsReplyController = FKeywordsReplyController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FKeywordsReplyController.prototype, "findAll", null);
exports.FKeywordsReplyController = FKeywordsReplyController = __decorate([
    (0, common_1.Controller)('fkeywords-reply'),
    __metadata("design:paramtypes", [keyworlds_reply_service_1.KeywordsReplyService])
], FKeywordsReplyController);
//# sourceMappingURL=fkeywords-reply.controller.js.map