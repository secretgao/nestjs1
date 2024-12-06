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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BKeywordsReplyController = void 0;
const common_1 = require("@nestjs/common");
const keywords_reply_entity_1 = require("../entity/keywords-reply.entity");
const keyworlds_reply_service_1 = require("../service/keyworlds-reply.service");
const create_keywords_reply_dto_1 = require("../dto/create-keywords-reply.dto");
let BKeywordsReplyController = class BKeywordsReplyController {
    constructor(keywordsReplyService) {
        this.keywordsReplyService = keywordsReplyService;
    }
    findAll() {
        return this.keywordsReplyService.findAll();
    }
    findOne(id) {
        return this.keywordsReplyService.findOne(+id);
    }
    create(createKeywordsReplyDto) {
        return this.keywordsReplyService.create(createKeywordsReplyDto);
    }
    update(id, keywordsReply) {
        return this.keywordsReplyService.update(+id, keywordsReply);
    }
    remove(id) {
        return this.keywordsReplyService.remove(+id);
    }
};
exports.BKeywordsReplyController = BKeywordsReplyController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BKeywordsReplyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BKeywordsReplyController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_keywords_reply_dto_1.CreateKeywordsReplyDto]),
    __metadata("design:returntype", Promise)
], BKeywordsReplyController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, keywords_reply_entity_1.KeywordsReply]),
    __metadata("design:returntype", Promise)
], BKeywordsReplyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BKeywordsReplyController.prototype, "remove", null);
exports.BKeywordsReplyController = BKeywordsReplyController = __decorate([
    (0, common_1.Controller)('bkeywords-reply'),
    __metadata("design:paramtypes", [keyworlds_reply_service_1.KeywordsReplyService])
], BKeywordsReplyController);
//# sourceMappingURL=bkeywords-reply.controller.js.map