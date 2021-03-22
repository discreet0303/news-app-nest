import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { NewRepository } from './new.repository';

@Module({
  imports: [TypeOrmModule.forFeature([NewRepository])],
  controllers: [NewsController],
  providers: [NewsService],
})
export class NewsModule {}
