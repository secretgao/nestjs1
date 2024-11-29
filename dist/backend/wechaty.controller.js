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
exports.WechatyController = void 0;
const common_1 = require("@nestjs/common");
const wechaty_service_1 = require("../service/wechaty.service");
const group_service_1 = require("../service/group.service");
let WechatyController = class WechatyController {
    constructor(wechatyService, groupService) {
        this.wechatyService = wechatyService;
        this.groupService = groupService;
    }
    async getRooms() {
        const rooms = await this.wechatyService.getRooms();
        return { status: 'success', rooms };
    }
    async getRooms1() {
        const rooms = await this.wechatyService.getRooms1();
        return { status: 'success', rooms };
    }
    async broadcastMessage(body) {
        const { roomId, message } = body;
        await this.wechatyService.sendMessageToRoom(roomId, message);
        return { status: 'success', message: `Message sent to room with ID ${roomId}` };
    }
};
exports.WechatyController = WechatyController;
__decorate([
    (0, common_1.Get)('rooms'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WechatyController.prototype, "getRooms", null);
__decorate([
    (0, common_1.Get)('rooms1'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WechatyController.prototype, "getRooms1", null);
__decorate([
    (0, common_1.Post)('broadcast'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WechatyController.prototype, "broadcastMessage", null);
exports.WechatyController = WechatyController = __decorate([
    (0, common_1.Controller)('wechaty'),
    __metadata("design:paramtypes", [wechaty_service_1.WechatyService,
        group_service_1.GroupService])
], WechatyController);
//# sourceMappingURL=wechaty.controller.js.map