import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('instruction_allocation')
export class InstructionAllocation {
  @PrimaryGeneratedColumn('increment', { type: 'int', unsigned: true })
  id: number;

  @Column({ type: 'int', unsigned: true, nullable: false, comment: '客户id' })
  customer_id: number;

  @Column({ type: 'varchar', length: 50, nullable: true, comment: '分配单号' })
  allocation_number: string;

  @Column({ type: 'varchar', length: 50, nullable: true, comment: '客户简称' })
  customer_name: string;

  @Column({ type: 'int', unsigned: true, nullable: false, comment: '指令id' })
  instruction_id: number;

  @Column({ type: 'varchar', length: 50, nullable: true, comment: '指令名称' })
  instruction_name: string;

  @Column({ type: 'timestamp', nullable: true, comment: '开始时间' })
  start_time: Date;

  @Column({ type: 'timestamp', nullable: true, comment: '到期时间' })
  end_time: Date;

  @Column({ type: 'timestamp', nullable: true, comment: '创建时间' })
  created_at: Date;

  @Column({ type: 'timestamp', nullable: true, comment: '编辑时间' })
  updated_at: Date;
  @Column({ type: 'varchar', length: 255, nullable: false, default: '', comment: '备注' })
  remark: string;

  @Column({ type: 'varchar', length: 50, nullable: true, comment: '创建人' })
  admin_name: string;

  @Column({ type: 'int', unsigned: true, nullable: true, comment: '创建人id' })
  admin_id: number;
}