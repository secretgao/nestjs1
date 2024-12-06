import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KeywordsReply } from '../entity/keywords-reply.entity';
import { ApiResponseReturn } from 'src/common/api-response-return';

@Injectable()
export class KeywordsReplyService {
  constructor(
    @InjectRepository(KeywordsReply)
    private readonly keywordsReplyRepository: Repository<KeywordsReply>,
  ) {}

  findAll(): Promise<KeywordsReply[]> {
    return this.keywordsReplyRepository.find();
  }

  /**
   * 给前台调用的方法
   * @returns 
   */
  async FfindAll(): Promise<ApiResponseReturn<any>> {
      const data  = await this.keywordsReplyRepository.createQueryBuilder('keywordsReply')
                    .select(['keywordsReply.keywords', 'keywordsReply.reply','keywordsReply.is_accureate'])
                    .where('keywordsReply.is_open = :is_open', { is_open: 1 })
                    .getMany();
      return new ApiResponseReturn(HttpStatus.OK, '获取成功',data);
  }
  findOne(id: number): Promise<KeywordsReply> {
    return this.keywordsReplyRepository.findOneBy({id});
  }

  create(CreateKeywordsReplyDto): Promise<KeywordsReply> {
    return this.keywordsReplyRepository.save(CreateKeywordsReplyDto);
  }

  async update(id: number, keywordsReply: KeywordsReply): Promise<KeywordsReply> {
    await this.keywordsReplyRepository.update(id, keywordsReply);
    return this.keywordsReplyRepository.findOneBy({id});
  }

  async remove(id: number): Promise<void> {
    await this.keywordsReplyRepository.delete(id);
  }
}