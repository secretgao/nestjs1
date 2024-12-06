import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('instruction')
export class Instruction {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: true, comment: '指令名称' })
  name: string;

  @Column({ type: 'smallint', default: 1, comment: '开关,1/0' })
  is_open: number;

  @CreateDateColumn({ type: 'timestamp', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)', comment: '创建时间' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)', comment: '更新时间' })
  updated_at: Date;

  @Column({ type: 'varchar', length: 50, nullable: true, comment: '标识码' })
  code: string;

  @Column({ type: 'varchar', length: 50, nullable: true, comment: '操作人' })
  admin_name: string;

  @Column({ type: 'int', unsigned: true, nullable: true, comment: '操作人id' })
  admin_id: number;
}