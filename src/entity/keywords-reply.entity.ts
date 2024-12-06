import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('keywords_reply')
export class KeywordsReply {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true, comment: '主键' })
  id: number;

  @Column({ type: 'varchar', length: 255,  comment: '关键字' })
  keywords: string;

  @Column({ type: 'varchar', length: 255, nullable: true,  comment: '关键字回复的内容' })
  reply: string | null;

  @Column({ type: 'smallint', unsigned: true, default: 0, comment: '是否开启 1开0关' })
  is_open: number;

  @Column({ type: 'smallint', unsigned: true, default: 0, comment: '是否精准匹配 1开0关' })
  is_accureate: number;
}