import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { ProductDto } from './dto/product.dto';
import { Product } from './entity/product.entity';
import { Repository } from 'typeorm';


@Injectable()
export class ProductServiseService {

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>, // Ensure that ProductRepository is accessible in the constructor parameter
  ) {}

  async getAllProducts() {
    return await this.productRepository.find();
  }

  async addProduct(product: ProductDto) {
    const newProduct = this.productRepository.create(product);
    return await this.productRepository.save(newProduct);
    // return product;
  }

}
