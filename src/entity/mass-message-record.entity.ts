import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('mass_message_record')
export class MassMessageRecord {
  @PrimaryGeneratedColumn('increment', { type: 'int', unsigned: true })
  id: number;

  @Column({ type: 'varchar', length: 255, collation: 'utf8mb4_unicode_ci', comment: '微信群id' })
  wx_id: string;

  @Column({ type: 'varchar', length: 255, nullable: true, collation: 'utf8mb4_unicode_ci', comment: '发消息内容' })
  message: string;

  @Column({ type: 'smallint', unsigned: true, default: 0, comment: '是否发送 1发送0未发送' })
  is_send: number;

  @CreateDateColumn({ type: 'timestamp', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)', comment: '创建时间' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)', comment: '更新时间' })
  updated_at: Date;
}