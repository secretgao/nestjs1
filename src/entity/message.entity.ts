import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  content: string;

  @Column()
  file_path: string;

  @Column()
  is_pc_msg: number;

  @Column()
  is_self_msg: number;

  @Column()
  msg_type: number;

  @Column()
  port: number;

  @Column()
  self_wx_id: string;

  @Column()
  sender: string;

  @Column()
  time_stamp: number;

  @Column()
  type: number;

  @Column()
  wx_id: string;
}