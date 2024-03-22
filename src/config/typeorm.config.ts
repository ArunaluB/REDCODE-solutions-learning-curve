import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Product } from "../modules/product/entity/product.entity"; // Import the 'Product' class from the appropriate module

export const TypeOrmConfig :TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '12345',
  database: 'redcodesolutions',
  entities: [
    Product
  ],
  synchronize: true,
}
