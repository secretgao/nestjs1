import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('group')
export class Group {
  @PrimaryGeneratedColumn('increment', { type: 'int', unsigned: true })
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_0900_bin', comment: '群聊id' })
  roomId: string;

  @Column({ type: 'varchar', length: 255, nullable: true, collation: 'utf8mb4_0900_bin', comment: '群聊名称' })
  topic: string;

  @Column({ type: 'varchar', length: 255,  collation: 'utf8mb4_0900_bin', comment: '群标签' })
  tag: string;
}
