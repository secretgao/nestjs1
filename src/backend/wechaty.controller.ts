import { Controller, Get, Post, Body } from '@nestjs/common';
import { WechatyService } from '../service/wechaty.service';
import { GroupService } from 'src/service/group.service';

@Controller('wechaty')
export class WechatyController {
  constructor(
    private readonly wechatyService: WechatyService,
    private readonly groupService: GroupService
  ) {}

  @Get('rooms')
  async getRooms() {
    const rooms = await this.wechatyService.getRooms();
   // const newRooms = await this.groupService.saveRooms(rooms);
    return { status: 'success', rooms };
  }
  @Get('rooms1')
  async getRooms1() {
    const rooms = await this.wechatyService.getRooms1();
    return { status: 'success', rooms };
  }
  @Post('broadcast')
  async broadcastMessage(@Body() body: { roomId: string; message: string }) {
    const { roomId, message } = body;
    await this.wechatyService.sendMessageToRoom(roomId, message);
    return { status: 'success', message: `Message sent to room with ID ${roomId}` };
  }
}
