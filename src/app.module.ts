import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ORM_CONFIG } from './config/ormconfig';

import { NewsModule } from './news/news.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ORM_CONFIG),
    NewsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
