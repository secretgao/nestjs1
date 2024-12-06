import { KeywordsReplyService } from '../service/keyworlds-reply.service';
export declare class FKeywordsReplyController {
    private readonly keywordsReplyService;
    constructor(keywordsReplyService: KeywordsReplyService);
    findAll(): Promise<import("../common/api-response-return").ApiResponseReturn<any>>;
}
