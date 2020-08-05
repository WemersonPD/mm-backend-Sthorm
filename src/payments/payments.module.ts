import { PaymentsController } from './payments.controller';
import { HttpModule, Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
@Module({
  providers: [
    PaymentsService
  ],
  imports: [
    HttpModule
  ],
  controllers: [
    PaymentsController
  ]
})
export class PaymentsModule {}
