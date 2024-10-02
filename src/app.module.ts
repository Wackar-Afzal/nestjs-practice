import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostModule } from './post/post.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import {TypeOrmModule} from "@nestjs/typeorm"
import { User } from './users/user.entity';
import { TagsModule } from './tags/tags.module';
import { MetaOptionsModule } from './meta-options/meta-options.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

const envPath = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}`.trim(): '.env';


@Module({
  imports: [UsersModule, PostModule, AuthModule,
    ConfigModule.forRoot({isGlobal:true,  envFilePath:envPath}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
    useFactory:(configService:ConfigService)=> {
      return{
      type:"postgres",
      // entities:[User],
      // logging: true,
      // logger: 'advanced-console',
      autoLoadEntities:true,
      synchronize:true,
      port: +configService.get('DATABASE_PORT'),
      username:configService.get('DATABASE_USER'),
      password:configService.get<string>('DATABASE_PASSWORD'),
      host:configService.get('DATABASE_HOST'),
      database:configService.get('DATABASE_NAME')  
    }
  }
   
  }), TagsModule, MetaOptionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
