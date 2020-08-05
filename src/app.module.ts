import { PaymentsModule } from './payments/payments.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { ProductsModule } from './products/products.module';
import { MulterModule } from '@nestjs/platform-express';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ProductsModule,
    MulterModule.register({
      dest: './files'
    }),
    UsersModule,
    AuthModule,
    PaymentsModule,
  ],
  controllers: [],
  
})
export class AppModule {}