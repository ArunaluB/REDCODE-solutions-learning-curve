import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const TypeOrmConfig :TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '12345',
  database: 'redcodesolutions',
  entities: [
      __dirname + '/../**/*.entity{.ts,.js}',
  ],
  synchronize: true,
}