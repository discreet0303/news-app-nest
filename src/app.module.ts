import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ORM_CONFIG } from './config/ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(ORM_CONFIG),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
