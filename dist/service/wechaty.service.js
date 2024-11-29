"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WechatyService = void 0;
const wechaty_1 = require("wechaty");
class WechatyService {
    constructor(GroupService, logger) {
        this.GroupService = GroupService;
        this.logger = logger;
    }
    onModuleInit() {
        this.bot = wechaty_1.WechatyBuilder.build();
        this.bot.on('scan', (qrcode, status) => {
            console.log(`Scan QR Code to login: ${status}\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`);
        });
        this.bot.on('login', user => {
            console.log(`User ${user} logged in`);
        });
        this.bot.on('message', async (message) => {
            console.log(`Message: ${message}`);
        });
        this.bot.start().catch(console.error);
    }
    onModuleDestroy() {
        this.bot.stop().catch(console.error);
    }
    async getRooms() {
        const rooms = await this.bot.Room.findAll();
        console.log(`getRooms: ${rooms.length} rooms found`);
        rooms.forEach(room => console.log(`Room ID: ${room.id}`));
        const roomDetails = await Promise.all(rooms.map(async (room) => {
            const topic = await room.topic();
            console.log(`Room ID: ${room.id}, Topic: ${topic}`);
            return { id: room.id, topic };
        }));
        console.log(`Room Details: ${JSON.stringify(roomDetails)}`);
        return roomDetails;
    }
    async getRooms1() {
        const rooms = await this.bot.Room.findAll();
        return rooms.map(room => ({ id: room.id, topic: room.topic() }));
    }
    async sendMessageToRoom(roomId, message) {
        const room = await this.bot.Room.find({ id: roomId });
        if (room) {
            await room.say(message);
        }
        else {
            console.log(`Room with ID ${roomId} not found`);
        }
    }
    async sendMessagesToMultipleRooms(roomIds, message) {
        const roomIdArray = roomIds.split(',');
        for (const roomId of roomIdArray) {
            await this.sendMessageToRoom(roomId.trim(), message);
            await this.sleep(1000);
        }
    }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
exports.WechatyService = WechatyService;
//# sourceMappingURL=wechaty.service.js.map