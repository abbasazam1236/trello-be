import { List } from 'src/list/entities/list.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  board_title: string;

  @Column()
  workspace: string;

  @Column()
  visibility: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date; // ✅ Fix: Ensures it gets a default value

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date; // ✅ Fix: Automatically updates on changes

  @OneToMany(() => List, (list) => list.board, { cascade: true })
  lists: List[];
}
