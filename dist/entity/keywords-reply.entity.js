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
exports.KeywordsReply = void 0;
const typeorm_1 = require("typeorm");
let KeywordsReply = class KeywordsReply {
};
exports.KeywordsReply = KeywordsReply;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', unsigned: true, comment: '主键' }),
    __metadata("design:type", Number)
], KeywordsReply.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, comment: '关键字' }),
    __metadata("design:type", String)
], KeywordsReply.prototype, "keywords", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, comment: '关键字回复的内容' }),
    __metadata("design:type", String)
], KeywordsReply.prototype, "reply", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'smallint', unsigned: true, default: 0, comment: '是否开启 1开0关' }),
    __metadata("design:type", Number)
], KeywordsReply.prototype, "is_open", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'smallint', unsigned: true, default: 0, comment: '是否精准匹配 1开0关' }),
    __metadata("design:type", Number)
], KeywordsReply.prototype, "is_accureate", void 0);
exports.KeywordsReply = KeywordsReply = __decorate([
    (0, typeorm_1.Entity)('keywords_reply')
], KeywordsReply);
//# sourceMappingURL=keywords-reply.entity.js.map