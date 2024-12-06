import { Entity, Column, PrimaryGeneratedColumn ,CreateDateColumn,UpdateDateColumn} from 'typeorm';

@Entity('group')
export class Group {
  @PrimaryGeneratedColumn('increment', { type: 'int', unsigned: true })
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: true,  comment: '群聊id' })
  wx_id: string;

  @Column({ type: 'varchar', length: 255, nullable: true, comment: '群聊名称' })
  nick_name: string;

  @Column({ type: 'varchar', length: 255, comment: '群标签' })
  tag: string;

  
  @CreateDateColumn({ type: 'timestamp', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)', comment: '创建时间' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)', comment: '更新时间' })
  updated_at: Date;
}
