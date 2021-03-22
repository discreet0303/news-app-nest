import { Injectable } from '@nestjs/common';
import { NewRepository } from './new.repository';
import { New } from './new.entity';

import { CreateNewsDto } from './dto/CreateNewsDto';

@Injectable()
export class NewsService {
  constructor(private newRepository: NewRepository) {}
  
  find(): Promise<New[]> {
    return this.newRepository.find();
  }

  findOne(id: number): Promise<New> {
    return this.newRepository.findOne(id);
  }

  async create(createNewsDto: CreateNewsDto): Promise<New> {
    const newObj = await this.newRepository.create(createNewsDto);
    return await this.newRepository.save(newObj);
  }

  async remove(id: number): Promise<New> {
    const newObj = this.findOne(id);
    if (newObj) {
      await this.newRepository.delete(id);
    }

    return newObj;
  }

  async update(id: number, updateNewsDto: CreateNewsDto): Promise<New> {
    await this.newRepository.update(id, updateNewsDto);
    return this.findOne(id);
  }
}
