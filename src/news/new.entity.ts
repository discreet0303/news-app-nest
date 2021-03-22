import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class New extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string;

  @Column('text')
  description: string;
}