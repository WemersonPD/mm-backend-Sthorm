import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ProductRepository} from './products.repository';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([ProductRepository])
    ],
    providers: [ProductsService],
    controllers: [ProductsController]
})
export class ProductsModule {}
