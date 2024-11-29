import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('instruction')
export class Instruction {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column({ type: 'varchar', length: 20, nullable: true, comment: '指令名称' })
  name: string;

  @Column({ type: 'varchar', length: 50, nullable: true, comment: '版本' })
  version: string;

  @Column({ type: 'varchar', length: 50, nullable: true, comment: '触发方式' })
  trigger_mode: string;

  @Column({ type: 'smallint', default: 1, comment: '开关,1/0' })
  is_open: number;

  @CreateDateColumn({ type: 'timestamp', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)', comment: '创建时间' })
  created_at: Date;

  @CreateDateColumn({ type: 'timestamp', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)', comment: '失效时间' })
  expire_at: Date;

  @UpdateDateColumn({ type: 'timestamp', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)', comment: '更新时间' })
  updated_at: Date;
}
