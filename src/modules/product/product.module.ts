import { Module } from '@nestjs/common';
import { ProductcontrollerController } from './productcontroller.controller';
import { ProductServiseService } from './productservise.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entity/product.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers : [ProductcontrollerController],
  providers: [ProductServiseService],
})
export class ProductModule {}
