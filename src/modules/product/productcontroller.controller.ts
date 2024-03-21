
import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductServiseService } from './productservise.service';
import { HttpStatus } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';

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
  @HttpCode(HttpStatus.OK)
  @UsePipes(ValidationPipe)// validate set this
  listaddproduct(@Body()product:ProductDto) {
    return {data:product};
  }

}
