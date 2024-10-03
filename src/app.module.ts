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
import appConfig from "./config/app.config"
import dataBaseConfig from "./config/database.config"
import envronmentValidation from './config/envronment.validation';


const envPath = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}`.trim(): '.env';

@Module({
  imports: [UsersModule, PostModule, AuthModule,
    ConfigModule.forRoot({isGlobal:true,  envFilePath:envPath,load:[appConfig,dataBaseConfig],validationSchema:envronmentValidation}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
    useFactory:(configService:ConfigService)=> {
      return{
      type:"postgres",
      // entities:[User],
      // logging: true,
      // logger: 'advanced-console',
      autoLoadEntities:configService.get('database.autoLoadEntities'),
      synchronize:configService.get('database.synchronize'),
      port: configService.get('database.port'),
      username:configService.get('database.user'),
      password:configService.get('database.password'),
      host:configService.get('database.host'),
      database:configService.get('database.name')  
    }
  }
   
  }), TagsModule, MetaOptionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
