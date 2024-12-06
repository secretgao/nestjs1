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
exports.KeywordsReplyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const keywords_reply_entity_1 = require("../entity/keywords-reply.entity");
const api_response_return_1 = require("../common/api-response-return");
let KeywordsReplyService = class KeywordsReplyService {
    constructor(keywordsReplyRepository) {
        this.keywordsReplyRepository = keywordsReplyRepository;
    }
    findAll() {
        return this.keywordsReplyRepository.find();
    }
    async FfindAll() {
        const data = await this.keywordsReplyRepository.createQueryBuilder('keywordsReply')
            .select(['keywordsReply.keywords', 'keywordsReply.reply', 'keywordsReply.is_accureate'])
            .where('keywordsReply.is_open = :is_open', { is_open: 1 })
            .getMany();
        return new api_response_return_1.ApiResponseReturn(common_1.HttpStatus.OK, '获取成功', data);
    }
    findOne(id) {
        return this.keywordsReplyRepository.findOneBy({ id });
    }
    create(CreateKeywordsReplyDto) {
        return this.keywordsReplyRepository.save(CreateKeywordsReplyDto);
    }
    async update(id, keywordsReply) {
        await this.keywordsReplyRepository.update(id, keywordsReply);
        return this.keywordsReplyRepository.findOneBy({ id });
    }
    async remove(id) {
        await this.keywordsReplyRepository.delete(id);
    }
};
exports.KeywordsReplyService = KeywordsReplyService;
exports.KeywordsReplyService = KeywordsReplyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(keywords_reply_entity_1.KeywordsReply)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], KeywordsReplyService);
//# sourceMappingURL=keyworlds-reply.service.js.map