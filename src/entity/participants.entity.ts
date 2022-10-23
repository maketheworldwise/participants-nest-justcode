import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity({ name: 'participants' })
@Unique(['user_email'])
export class Participants extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50, comment: '이메일' })
  user_email: string;

  @Column({ type: 'varchar', length: 50, comment: '이름' })
  user_name: string;

  @Column({ type: 'boolean', default: true, comment: '참석 여부' })
  is_comming: boolean;

  @Column({ type: 'boolean', default: true, comment: '식사 여부' })
  is_dinner: boolean;

  @Column({ type: 'text', comment: '하고싶은 말' })
  comments: string;
}
