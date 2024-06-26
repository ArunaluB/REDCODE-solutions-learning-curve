
import { BadRequestException, Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductServiseService } from './productservise.service';
import { HttpStatus } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { promises } from 'dns';
import { ManufacturerDto } from './dto/manufacturer.dto';
import { suplierDto } from './dto/suplier.dto';

// genaral controler path set
@Controller('product')
export class ProductcontrollerController {
  // Dependency Injection is used here nestjs
  constructor(private readonly ProductServiseService : ProductServiseService) {}

  @Get('/')
  async getAllproduct() {
    const product = await this.ProductServiseService.getAllProductsLists();
    return product;
  }

  @Post('/')
  // @HttpCode(HttpStatus.OK)
  @UsePipes(ValidationPipe)// validate set this
  async listaddproduct(@Body()product:ProductDto): Promise<ProductDto> {
    return await this.ProductServiseService.addProduct(product);
  }

  // ParseInt danne api ganna onama number wiharak nisa wena akk dammoth request aka fail wenawa
  @Put(':id')
  updateProductById(@Param('id', ParseIntPipe) id: number, @Body() product: ProductDto) {
    return this.ProductServiseService.updateProduct(id,product);
  }

  @Delete(':id')
  DeleteProductById(@Param('id', ParseIntPipe) id: number) {
    return this.ProductServiseService.DeleteProduct(id);
  }
  @Post(':id/manu')
  @UsePipes(ValidationPipe)
  async addManufacturer(@Param('id', ParseIntPipe) id:number,@Body()manufacturer:ManufacturerDto) {
    return await this.ProductServiseService.addmanufacturer(id,manufacturer);
  }

  @Post(':id/suplier')
  @UsePipes(ValidationPipe)
  async addsuplier(@Param('id', ParseIntPipe) id:number,@Body()suplier:suplierDto) {
    return await this.ProductServiseService.addsuplier(id,suplier);
  }


}
