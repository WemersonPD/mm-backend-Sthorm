import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateProductDto } from './dto/create-product.dto';
import { Products } from './product.entity';
import { ProductRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductRepository)
    private productRepository: ProductRepository,
  ){}

  async createProduct(createProductDto: CreateProductDto): Promise<Products> {
    return this.productRepository.createProduct(createProductDto);
  }

  async getAllProducts(): Promise<Products[]> {

    const products = await this.productRepository.find({})
    return products;
  }

  
}
