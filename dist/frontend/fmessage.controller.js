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
exports.FMessageController = void 0;
const common_1 = require("@nestjs/common");
const message_service_1 = require("../service/message.service");
const create_message_dto_1 = require("../dto/create-message.dto");
const swagger_1 = require("@nestjs/swagger");
let FMessageController = class FMessageController {
    constructor(messageService) {
        this.messageService = messageService;
    }
    async create(createMessageDto) {
        try {
            const message = await this.messageService.create(createMessageDto);
            return message;
        }
        catch (error) {
            throw new common_1.HttpException('Failed to add message', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.FMessageController = FMessageController;
__decorate([
    (0, common_1.Post)('/create'),
    (0, swagger_1.ApiOperation)({ summary: '本地数据同步到生产接口' }),
    (0, swagger_1.ApiBody)({ description: '参数', type: create_message_dto_1.CreateMessageDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_message_dto_1.CreateMessageDto]),
    __metadata("design:returntype", Promise)
], FMessageController.prototype, "create", null);
exports.FMessageController = FMessageController = __decorate([
    (0, common_1.Controller)('fmessages'),
    __metadata("design:paramtypes", [message_service_1.MessageService])
], FMessageController);
//# sourceMappingURL=fmessage.controller.js.map