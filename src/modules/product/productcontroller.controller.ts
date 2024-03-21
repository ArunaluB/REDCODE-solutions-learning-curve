
import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { ProductServiseService } from './productservise.service';
import { HttpStatus } from '@nestjs/common';
// genaral controler path set
@Controller('product')
export class ProductcontrollerController {
  // Dependency Injection is used here nestjs
  // ...

  @Post('/')
  @HttpCode(HttpStatus.OK)
  listaddproduct(@Body() product) {
    return { data: product };
  }

}
