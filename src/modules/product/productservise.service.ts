import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { ProductDto } from './dto/product.dto';
import { Product } from './entity/product.entity';
import { Repository } from 'typeorm';
import { UpdateProductParams } from '../../../dist/modules/utils/types';


@Injectable()
export class ProductServiseService {


  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}


  async getAllProductsLists() {
      return await this.productRepository.find();
  }

  async addProduct(product: ProductDto) {
    const newProduct = this.productRepository.create(product);
    return await this.productRepository.save(newProduct);

  }

  async updateProduct(id: number,UpdateProductDetails:ProductDto){
    return this.productRepository.update({id},UpdateProductDetails);
  }
}
