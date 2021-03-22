import { Injectable } from '@nestjs/common';
import { Article } from './article.entity';
import { ArticleRepository } from './article.repository';

import { CreateArticlesDto } from './dto/create-article-dto';

@Injectable()
export class ArticlesService {
  constructor(private articleRepository: ArticleRepository) {}

  find(): Promise<Article[]> {
    return this.articleRepository.find();
  }

  findOne(id: number): Promise<Article> {
    return this.articleRepository.findOne();
  }

  async create(createArticlesDto: CreateArticlesDto): Promise<Article> {
    const articleObj = await this.articleRepository.create(createArticlesDto);
    return await this.articleRepository.save(articleObj);
  }

  async remove(id: number): Promise<Article> {
    const articleObj = this.findOne(id);
    if (articleObj) await this.articleRepository.delete(id);

    return articleObj;
  }

  async update(id: number, updateArticleDto: CreateArticlesDto): Promise<Article> {
    await this.articleRepository.update(id, updateArticleDto);
    return this.findOne(id);
  }
}