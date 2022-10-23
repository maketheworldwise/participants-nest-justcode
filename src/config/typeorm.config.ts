import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'JUSTCODE',
  entities: ['dist/**/*.entity.{ts,js}'],
  synchronize: true, // 엔티티 동기화
};
