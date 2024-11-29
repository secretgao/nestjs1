import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('admin_users')
export class AdminUsers {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column({ type: 'varchar', length: 20, nullable: true, comment: '用户名' })
  username: string;

  @Column({ type: 'varchar', length: 200, nullable: true, comment: '密码' })
  password: string;

  @Column({ type: 'varchar', length: 255, nullable: true, comment: '访问令牌' })
  access_token: string;

  @CreateDateColumn({ type: 'timestamp', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)', comment: '创建时间' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)', comment: '更新时间' })
  updated_at: Date;
}
