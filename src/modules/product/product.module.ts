// product.module.ts

import { Module } from '@nestjs/common';
import { ProductcontrollerController } from './productcontroller.controller';
import { ProductServiseService } from './productservise.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entity/product.entity';
import { Manufacturer } from './entity/manufacturer.entity';
import { suplier } from './entity/suplier.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product,Manufacturer,suplier]),
  ],
  controllers: [ProductcontrollerController],
  providers: [ProductServiseService],
})
export class ProductModule {}
