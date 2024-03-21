import { Module } from '@nestjs/common';
import { ProductcontrollerController } from './productcontroller.controller';
import { ProductServiseService } from './productservise.service';

@Module({
  imports: [ProductModule],
  controllers : [ProductcontrollerController],
  providers: [ProductServiseService],
})
export class ProductModule {}
