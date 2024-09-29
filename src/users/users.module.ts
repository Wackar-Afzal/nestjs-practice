import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './providers/user.services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  controllers: [UsersController],
  providers:[UserService],
  exports:[UserService],
  imports:[TypeOrmModule.forFeature([User])]
})
export class UsersModule {}
