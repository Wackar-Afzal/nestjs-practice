import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './providers/post.service';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { MetaOption } from 'src/meta-options/meta-options.entity';
import { MetaOptionsModule } from 'src/meta-options/meta-options.module';
import { User } from 'src/users/user.entity';
import { Tag } from 'src/tags/tag.entity';
import { TagsModule } from 'src/tags/tags.module';

@Module({
  controllers: [PostController],
  providers:[PostService],
  imports:[UsersModule,TagsModule,TypeOrmModule.forFeature([Post,MetaOption,User]), MetaOptionsModule,]
})
export class PostModule {}
