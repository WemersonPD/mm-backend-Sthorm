import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { Products } from './product.entity';


@EntityRepository(Products)
export class ProductRepository extends Repository<Products> {
  async createProduct(createProductDto: CreateProductDto): Promise<Products> {
    const { name, price, type, urlImage } = createProductDto;

    const product = this.create();
    product.name = name;
    product.price = price;
    product.status = true;
    product.type = type;
    product.urlImage = urlImage;

    try {
      await product.save();
      return product;
    } catch (error) {
      if (error.code.toString() === '23505') {
        throw new ConflictException('Nome de produto em uso.');
      } else {
        throw new InternalServerErrorException(
          'Erro ao salvar o produto.',
        );
      }
    }
  }
  
  async 
}
