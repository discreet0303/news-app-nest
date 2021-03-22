import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const ORM_CONFIG: TypeOrmModuleOptions  = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: "todo-news",
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true
}