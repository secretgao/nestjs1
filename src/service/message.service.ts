import { Injectable ,Logger} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMessageDto } from '../dto/create-message.dto';
import { Message } from '../entity/message.entity';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
    private readonly logger:Logger     //使用日志
  ) {}

  async create(createMessageDto: CreateMessageDto): Promise<Message> {
     
    try {
      const message = this.messageRepository.create(createMessageDto);
      return this.messageRepository.save(message);
    } catch (error){
      
      // 记录错误信息或执行其他处理逻辑
      this.logger.log('Error saving message:', error);
      
      // 抛出错误，以便调用者可以处理它
      throw new Error(`Failed to save message: ${error.message}`);
    }
    
  }
}