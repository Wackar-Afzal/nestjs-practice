import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { postType } from './enums/postType.enum';
import { status } from './enums/status.enum';
import { CreateMetaOptionDto } from 'src/meta-options/dtos/create-metaoptions.dto';
import { MetaOption } from 'src/meta-options/meta-options.entity';
import { User } from 'src/users/user.entity';
import { Tag } from 'src/tags/tag.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

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

  @OneToOne(()=>MetaOption,(metaOption)=>metaOption.post,{cascade:true,eager:true})
  // @OneToOne(()=>MetaOption,{cascade:['remove','insert']})
  metaOptions?:MetaOption;
  
  @ManyToOne(()=>User, (user)=>user.posts,{eager:true})
  author:User;


  @ManyToMany(() => Tag, (tag) => tag.posts, { eager: true,})
  @JoinTable()
  tags?: Tag[];
}
