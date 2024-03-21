
import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductServiseService } from './productservise.service';
import { HttpStatus } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { promises } from 'dns';

// genaral controler path set
@Controller('product')
export class ProductcontrollerController {
  // Dependency Injection is used here nestjs
  constructor(private readonly ProductServiseService : ProductServiseService) {}

  @Get('/')
  getAllproduct() {
    return this.ProductServiseService.getAllProducts;
  }

  @Post('/')
  // @HttpCode(HttpStatus.OK)
  @UsePipes(ValidationPipe)// validate set this
  async listaddproduct(@Body()product:ProductDto): Promise<ProductDto> {
    return await this.ProductServiseService.addProduct(product);
  }

}
