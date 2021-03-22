import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { NewsService } from './news.service';
import { New } from './new.entity';

import { CreateNewsDto } from './dto/CreateNewsDto'

@Controller('news')
export class NewsController {
  constructor(private newsService: NewsService) {}

  @Get()
  find(): Promise<New[]> {
    return this.newsService.find();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<New> {
    return this.newsService.findOne(id);
  }

  @Post()
  create(@Body() createNewsDto: CreateNewsDto): Promise<New> {
    return this.newsService.create(createNewsDto);
  }
  
  @Delete(':id')
  remove(@Param('id') id): Promise<New> {
    return this.newsService.remove(id);
  }

  @Put(':id')
  update(@Body() updateNewsDto: CreateNewsDto, @Param('id') id): Promise<New> {
    return this.newsService.update(id, updateNewsDto);
  }
}
