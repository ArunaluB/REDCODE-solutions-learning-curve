
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductServiseService } from './productservise.service';
// genaral controler path set
@Controller('product')
export class ProductcontrollerController {
  // Dependency Injection is used here nestjs
  constructor(private ProductServiseService : ProductServiseService) {}

  @Get('/')
  getAllproduct() {
    return this.ProductServiseService.getAllproduct();
  }

  @Post('/')
  listaddproduct(@Body()product) {
    return {data:product};
  }

}
