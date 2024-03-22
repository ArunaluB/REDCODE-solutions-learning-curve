import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Product } from "../modules/product/entity/product.entity";
import { Manufacturer } from "src/modules/product/entity/manufacturer.entity";
import { suplier } from "src/modules/product/entity/suplier.entity";

export const TypeOrmConfig :TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '12345',
  database: 'redcodesolutions',
  entities: [
    Product,Manufacturer,suplier
  ],
  synchronize: true,
}
