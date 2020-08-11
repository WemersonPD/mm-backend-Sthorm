import { CreatePaymentCieloCreditCardDto } from './dto/create-payment-cielo-credit-card.dto';
import { CieloConfig } from './../configs/cielo.cofig';
import { HttpService, Injectable } from '@nestjs/common';
import {
  CieloConstructor,
  Cielo,
  TransactionCreditCardRequestModel,
  EnumBrands,
  EnumCardType,
} from 'cielo';

@Injectable()
export class PaymentsService {
  private cieloParams: CieloConstructor = {
    merchantId: CieloConfig.merchantId,
    merchantKey: CieloConfig.merchantKey,
    sandbox: true, // Opcional - Ambiente de Testes
  };

  private cielo = new Cielo(this.cieloParams);

  constructor(private httpClient: HttpService) {}
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async paymentCreditCardCielo(creaatePaymenteCieloCreditCard: CreatePaymentCieloCreditCardDto) {
    const paymentParams: TransactionCreditCardRequestModel = {
      customer: {
        name: creaatePaymenteCieloCreditCard.customer.name,
        identity: creaatePaymenteCieloCreditCard.customer.identity,
        identityType: creaatePaymenteCieloCreditCard.customer.identityType,
        email: creaatePaymenteCieloCreditCard.customer.email,
        deliveryAddress: {
          street: creaatePaymenteCieloCreditCard.customer.deliveryAddress.street,
          number: creaatePaymenteCieloCreditCard.customer.deliveryAddress.number,
          complement: creaatePaymenteCieloCreditCard.customer.deliveryAddress.complement,
          zipCode: creaatePaymenteCieloCreditCard.customer.deliveryAddress.zipCode,
          city: creaatePaymenteCieloCreditCard.customer.deliveryAddress.city,
          state: creaatePaymenteCieloCreditCard.customer.deliveryAddress.state,
          country: creaatePaymenteCieloCreditCard.customer.deliveryAddress.country,
        },
      },
      merchantOrderId: creaatePaymenteCieloCreditCard.merchantOrderId,
      payment: {
        amount: creaatePaymenteCieloCreditCard.payment.amount, // R$100,00
        creditCard: {
          brand: EnumBrands[creaatePaymenteCieloCreditCard.payment.creditCard.brand],
          cardNumber: creaatePaymenteCieloCreditCard.payment.creditCard.cardNumber,
          holder: creaatePaymenteCieloCreditCard.payment.creditCard.holder,
          expirationDate: creaatePaymenteCieloCreditCard.payment.creditCard.expirationDate,
          securityCode: creaatePaymenteCieloCreditCard.payment.creditCard.securityCode
        },
        installments: creaatePaymenteCieloCreditCard.payment.installments,
        softDescriptor: 'Banzeh',
        type: EnumCardType.CREDIT,
        capture: false,
      },
    };

    return await this.cielo.creditCard.transaction(paymentParams);
  }
}
