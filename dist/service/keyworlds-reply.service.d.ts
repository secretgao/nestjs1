import { Repository } from 'typeorm';
import { KeywordsReply } from '../entity/keywords-reply.entity';
import { ApiResponseReturn } from 'src/common/api-response-return';
export declare class KeywordsReplyService {
    private readonly keywordsReplyRepository;
    constructor(keywordsReplyRepository: Repository<KeywordsReply>);
    findAll(): Promise<KeywordsReply[]>;
    FfindAll(): Promise<ApiResponseReturn<any>>;
    findOne(id: number): Promise<KeywordsReply>;
    create(CreateKeywordsReplyDto: any): Promise<KeywordsReply>;
    update(id: number, keywordsReply: KeywordsReply): Promise<KeywordsReply>;
    remove(id: number): Promise<void>;
}
