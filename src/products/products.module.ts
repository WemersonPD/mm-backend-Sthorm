import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ProductRepository} from './products.repository';
import { ProductsService } from './products.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([ProductRepository])
    ],
    providers: [ProductsService]
})
export class ProductsModule {}
