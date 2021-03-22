import { EntityRepository, Repository } from 'typeorm';
import { New } from './new.entity';

@EntityRepository(New)
export class NewRepository extends Repository<New> {

}