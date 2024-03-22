import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { ProductDto } from './dto/product.dto';
import { Product } from './entity/product.entity';
import { Repository } from 'typeorm';
import { UpdateProductParams } from '../../../dist/modules/utils/types';
import { ManufacturerDto } from './dto/manufacturer.dto';
import { Manufacturer } from './entity/manufacturer.entity';


@Injectable()
export class ProductServiseService {


  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Manufacturer)
    private manufacturerRepository: Repository<Manufacturer>
  ) {}


  async getAllProductsLists() {
    // releation aka penway
      return await this.productRepository.find({ relations: ['manufacturer'] });
  }

  async addProduct(product: ProductDto) {
    const newProduct = this.productRepository.create(product);
    return await this.productRepository.save(newProduct);

  }

  async updateProduct(id: number,UpdateProductDetails:ProductDto){
    return this.productRepository.update({id},UpdateProductDetails);
  }

  async DeleteProduct(id: number){
    return this.productRepository.delete({id});
  }

  async addmanufacturer(id:number,Manufacturer: ManufacturerDto) {
    const manufacturer = await this.productRepository.findOneBy({ id });
    if (!manufacturer) {
      throw new BadRequestException('Invalid manufacturer id');
    };

    const newmanufacturer = this.manufacturerRepository.create(Manufacturer);
    const savedmanaufacturer = await this.manufacturerRepository.save(newmanufacturer);
    manufacturer.manufacturer=savedmanaufacturer;
    return await this.productRepository.save(manufacturer);
  }

}
