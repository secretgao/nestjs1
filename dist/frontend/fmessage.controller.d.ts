import { MessageService } from '../service/message.service';
import { CreateMessageDto } from '../dto/create-message.dto';
import { Message } from '../entity/message.entity';
export declare class FMessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    create(createMessageDto: CreateMessageDto): Promise<Message>;
}
