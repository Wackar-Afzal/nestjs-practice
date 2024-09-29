import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { postType } from './enums/postType.enum';
import { status } from './enums/status.enum';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    type: 'varchar',
    length: 512,
    nullable: false,
  })
  title: string;

  @Column({
    type: 'enum',
    enum:postType,
    nullable: false,
    default:postType.POST
  })
  postType: postType;

  @Column({
    type: 'varchar',
    length: 512,
    nullable: false,
    unique:true
  })
  slug: string;

  @Column({
    type: 'enum',
    enum:status,
    nullable: false,
    default:status.DRAFT
  })
  status: status;

  @Column({
    type: 'text',
    nullable: true,
  })
  content?: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  schema?: string;

  @Column({
    type: 'varchar',
    nullable: true,
    length:1024
  })
  feautredImageUrl?: string;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  publishedOn?: Date;

  @Column({
    type: 'simple-array',
    nullable: true,
  })
  tags?: string[];
}
