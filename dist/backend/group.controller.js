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
exports.GroupController = void 0;
const common_1 = require("@nestjs/common");
const group_service_1 = require("../service/group.service");
const send_group_message_dto_1 = require("../dto/send_group_message.dto");
const auth_public_1 = require("../common/auth_public");
const swagger_1 = require("@nestjs/swagger");
let GroupController = class GroupController {
    constructor(GroupService, logger) {
        this.GroupService = GroupService;
        this.logger = logger;
        this.logger.log('group init');
    }
    async list(PaginationDto) {
        try {
            const result = await this.GroupService.findAll(PaginationDto);
            return result;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async sendGroupMessage(SendGroupMessageDto) {
        try {
            const token = await this.GroupService.sendGroupMessage(SendGroupMessageDto);
            return { token };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.GroupController = GroupController;
__decorate([
    (0, auth_public_1.Public)(),
    (0, swagger_1.ApiOperation)({ summary: '获取群组列表-从数据库查询' }),
    (0, common_1.Get)('list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "list", null);
__decorate([
    (0, auth_public_1.Public)(),
    (0, swagger_1.ApiOperation)({ summary: '群组发送消息' }),
    (0, swagger_1.ApiBody)({ description: '参数', type: send_group_message_dto_1.SendGroupMessageDto }),
    (0, common_1.Get)('push_message'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [send_group_message_dto_1.SendGroupMessageDto]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "sendGroupMessage", null);
exports.GroupController = GroupController = __decorate([
    (0, common_1.Controller)('group'),
    __metadata("design:paramtypes", [group_service_1.GroupService,
        common_1.Logger])
], GroupController);
//# sourceMappingURL=group.controller.js.map