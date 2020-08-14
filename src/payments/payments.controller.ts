import { CreatePaymentCieloCreditCardDto } from './dto/create-payment-cielo-credit-card.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';
@Controller('payment')
export class PaymentsController {
  constructor(
    private paymentsService: PaymentsService
  ) { }
  
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @Post('/creditCard')
  // async purchaseCreditCard(@Body() paymentCreditcard: CreatePaymentCieloCreditCardDto) {
  //   const product = await this.paymentsService.paymentCreditCardCielo(paymentCreditcard);
  //   return product
  // }
  async purchaseCreditCard(@Body() paymentCreditcard: CreatePaymentCieloCreditCardDto) { 
    const payment = await this.paymentsService.savePayment(paymentCreditcard);
    return payment;
  }

}