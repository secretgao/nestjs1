import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('customer_manage')
export class CustomerManage {
  @PrimaryGeneratedColumn({ unsigned: true, comment: '客户id' })
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: true, comment: '客户简称' })
  abbreviation: string;

  @Column({ type: 'smallint', unsigned: true, default: 0, comment: '客户状态 1启用0禁用' })
  status: number;

  @Column({ type: 'varchar', length: 50, nullable: true, comment: '登录帐号' })
  username: string;
  @Column({ type: 'varchar', length: 50, nullable: true, comment: '登录密码' })
  password: string;
  @Column({ type: 'varchar', length: 50, nullable: true, comment: '客户对接人' })
  contact_person: string;

  @Column({ type: 'varchar', length: 50, nullable: true, comment: '客户公司名称' })
  customer_company_name: string;

  @Column({ type: 'varchar', length: 50, nullable: true, comment: '联系电话' })
  phone: string;

  @Column({ type: 'varchar', length: 255, nullable: true, comment: '公司地址' })
  address: string;

  @Column({ type: 'varchar', length: 50, nullable: true, comment: '行业类别' })
  industry_category: string;

  @Column({ type: 'varchar', length: 255, nullable: true, comment: '备注' })
  remark: string;

  @CreateDateColumn({ type: 'timestamp', nullable: true, comment: '创建时间' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true, comment: '更新时间' })
  updated_at: Date;
}