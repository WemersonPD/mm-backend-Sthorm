import { Payment } from './payment.entity';
import { CreatePaymentCieloCreditCardDto } from './dto/create-payment-cielo-credit-card.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';
@Controller('payment')
export class PaymentsController {
  constructor(
    private paymentsService: PaymentsService
  ) { }
  
  @Post('creditCard')
  async purchaseCreditCard(@Body() paymentCreditcard: CreatePaymentCieloCreditCardDto): Promise<Payment> { 
    const payment = await this.paymentsService.createPayment(paymentCreditcard);
    return payment;
  }

  @Get('order-history/:ownerEmail')
  async getHistory(@Param('ownerEmail') ownerEmail: string): Promise<Payment[]> {
    const orderHistorysByOwnerEmail = await this.paymentsService.gateOrderHistoryByOwnerEmail(ownerEmail);
    return orderHistorysByOwnerEmail;
  }
}