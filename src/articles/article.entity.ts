import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Article extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string;

  @Column('text')
  body: string;

  @Column()
  excrept: string;
}