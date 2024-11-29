import { Injectable, OnModuleInit, OnModuleDestroy,Logger } from '@nestjs/common';
import { GroupService } from './group.service';
import { WechatyBuilder } from 'wechaty'
export class WechatyService implements OnModuleInit, OnModuleDestroy {
  private bot;
  constructor(
    private readonly GroupService: GroupService,
    private readonly logger:Logger     //使用日志
    // 注入其他依赖，例如 bot
  ) {}

  onModuleInit() {
    this.bot =  WechatyBuilder.build();// Wechaty.Wechaty();

    this.bot.on('scan', (qrcode, status) => {
      console.log(`Scan QR Code to login: ${status}\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`)
    });

    this.bot.on('login', user => {
      console.log(`User ${user} logged in`);
    });

    this.bot.on('message', async message => {
      console.log(`Message: ${message}`);
    /*
      // 获取消息类型
      const messageType = message.type();
      console.log(`Message Type: ${messageType}`);
        
          // 获取消息内容
      if (messageType === this.bot.Message.Type.Text) {
        console.log(`Text: ${message.text()}`);
      } else if (messageType === this.bot.Message.Type.Image) {
        const image = message.toImage();
        const fileBox = await image.artwork(); // 获取原图
        console.log(`Image: ${fileBox.name}`);
      } else if (messageType === this.bot.Message.Type.Audio) {
        const fileBox = await message.toFileBox();
        console.log(`Audio: ${fileBox.name}`);
      } else if (messageType === this.bot.Message.Type.Video) {
        const fileBox = await message.toFileBox();
        console.log(`Video: ${fileBox.name}`);
      } else if (messageType === this.bot.Message.Type.Emoticon) {
        const fileBox = await message.toFileBox();
        console.log(`Emoticon: ${fileBox.name}`);
      } else if (messageType === this.bot.Message.Type.File) {
        const fileBox = await message.toFileBox();
        console.log(`File: ${fileBox.name}`);
      } else if (messageType === this.bot.Message.Type.Url) {
        const urlLink = await message.toUrlLink();
        console.log(`Link: ${urlLink.url()}`);
      } else if (messageType === this.bot.Message.Type.MiniProgram) {
        const miniProgram = await message.toMiniProgram();
        console.log(`MiniProgram: ${miniProgram.title()}`);
      } else if (messageType === this.bot.Message.Type.Contact) {
        const contactCard = await message.toContact();
        console.log(`Contact: ${contactCard.name()}`);
      }
      // 获取发送者
      const sender = message.talker();
      console.log(`Sender: ${sender.name()}`);
    
      // 获取接收者
      const receiver = message.to();
      if (receiver) {
        console.log(`Receiver: ${receiver.name()}`);
      }
    
      // 获取群聊
      const room = message.room();
      if (room) {
        console.log(`Room: ${room.topic()}`);
      }
    
      // 获取消息内容
      if (messageType === this.bot.Message.Type.Text) {
        console.log(`Text: ${message.text()}`);
      }
    
      // 获取图片消息内容
      if (messageType === this.bot.Message.Type.Image) {
        const image = message.toImage();
        const fileBox = await image.artwork(); // 获取原图
        console.log(`Image: ${fileBox.name}`);
      }
    
      // 获取文件消息内容
      if (messageType === this.bot.Message.Type.File) {
        const fileBox = await message.toFileBox();
        console.log(`File: ${fileBox.name}`);
      }
    
      // 获取链接消息内容
      if (messageType === this.bot.Message.Type.Url) {
        const urlLink = await message.toUrlLink();
        console.log(`Link: ${urlLink.url()}`);
      }
    
      // 获取消息发送时间
      const timestamp = message.date();
      console.log(`Timestamp: ${timestamp}`);
    
      // 判断是否提到了某个联系人
      const mentionList = await message.mentionList();
      if (mentionList.length > 0) {
        mentionList.forEach(contact => {
          console.log(`Mentioned: ${contact.name()}`);
        });
      }
    
      // 判断消息是否由机器人自己发送
      if (message.self()) {
        console.log('This message is sent by the bot itself.');
      }
        */
    });
    
    this.bot.start().catch(console.error);
  }

  onModuleDestroy() {
    this.bot.stop().catch(console.error);
  }

  async getRooms() {
    const rooms = await this.bot.Room.findAll();
    console.log(`getRooms: ${rooms.length} rooms found`); // 打印房间数量
    rooms.forEach(room => console.log(`Room ID: ${room.id}`)); // 打印每个房间的 ID
  
    const roomDetails = await Promise.all(
      rooms.map(async room => {
        const topic = await room.topic(); // 使用 await 获取房间主题
        console.log(`Room ID: ${room.id}, Topic: ${topic}`);
        return { id: room.id, topic };
      })
    );
  
    console.log(`Room Details: ${JSON.stringify(roomDetails)}`);
    return roomDetails;
  }
  

  /*
  private async saveRoomsToDatabase(roomDetails: { id: string; topic: string }[]) {
    const groupRepository = getRepository(Group);

    for (const roomDetail of roomDetails) {
      const group = new Group();
      group.roomId = roomDetail.id;
      group.topic = roomDetail.topic;
      group.tag = ''; // 这里可以根据需要设置群标签

      await groupRepository.save(group);
    }
  }
*/
  async getRooms1() {
    const rooms = await this.bot.Room.findAll();
    return rooms.map(room => ({ id: room.id, topic: room.topic() }));
  
  }
  async sendMessageToRoom(roomId: string, message: string) {
    const room = await this.bot.Room.find({ id: roomId });
    if (room) {
      await room.say(message);
    } else {
      console.log(`Room with ID ${roomId} not found`);
    }
  }

  async sendMessagesToMultipleRooms(roomIds: string, message: string) {
    const roomIdArray = roomIds.split(',');

    for (const roomId of roomIdArray) {
      await this.sendMessageToRoom(roomId.trim(), message);
      await this.sleep(1000); // 停1秒
    }
  }

  private sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
