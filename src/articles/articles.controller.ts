import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Article } from './article.entity';
import { ArticlesService } from './articles.service';
import { CreateArticlesDto } from './dto/create-article-dto';


@Controller('articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}

  @Get()
  find(): Promise<Article[]> {
    return this.articlesService.find();
  }

  @Get(':id')
  findOne(id: number): Promise<Article> {
    return this.articlesService.findOne(id);
  }

  @Post()
  create(@Body() createArticleDto: CreateArticlesDto): Promise<Article> {
    return this.articlesService.create(createArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id): Promise<Article> {
    return this.articlesService.remove(id);
  }

  @Put(':id')
  update(@Body() updateAricleDto: CreateArticlesDto, @Param('id') id): Promise<Article> {
    return this.articlesService.update(id, updateAricleDto);
  }
}