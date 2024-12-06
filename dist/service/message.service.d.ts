import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateMessageDto } from '../dto/create-message.dto';
import { Message } from '../entity/message.entity';
export declare class MessageService {
    private readonly messageRepository;
    private readonly logger;
    constructor(messageRepository: Repository<Message>, logger: Logger);
    create(createMessageDto: CreateMessageDto): Promise<Message>;
}
