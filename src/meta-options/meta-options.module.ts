import { Module } from '@nestjs/common';
import { MetaOptionsController } from './meta-options.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetaOption } from './meta-options.entity';
import { MetaOptionService } from './providers/metaOption.service';

@Module({
  controllers: [MetaOptionsController],
  providers:[MetaOptionService],
  imports:[TypeOrmModule.forFeature([MetaOption])]
})
export class MetaOptionsModule {}
