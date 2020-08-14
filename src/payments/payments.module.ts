import { PaymentRepository } from './payment.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentsController } from './payments.controller';
import { HttpModule, Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
@Module({
  providers: [
    PaymentsService
  ],
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([PaymentRepository])
  ],
  controllers: [
    PaymentsController
  ]
})
export class PaymentsModule {}
