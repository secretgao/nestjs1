import { KeywordsReply } from '../entity/keywords-reply.entity';
import { KeywordsReplyService } from '../service/keyworlds-reply.service';
import { CreateKeywordsReplyDto } from 'src/dto/create-keywords-reply.dto';
export declare class BKeywordsReplyController {
    private readonly keywordsReplyService;
    constructor(keywordsReplyService: KeywordsReplyService);
    findAll(): Promise<KeywordsReply[]>;
    findOne(id: string): Promise<KeywordsReply>;
    create(createKeywordsReplyDto: CreateKeywordsReplyDto): Promise<KeywordsReply>;
    update(id: string, keywordsReply: KeywordsReply): Promise<KeywordsReply>;
    remove(id: string): Promise<void>;
}
