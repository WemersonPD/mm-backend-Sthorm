import { CreatePaymentCieloCreditCardDto } from './dto/create-payment-cielo-credit-card.dto';
import { Payment } from './payment.entity';
import { EntityRepository, Repository } from "typeorm";
import { Cielo, CieloConstructor, EnumBrands, EnumCardType, TransactionCreditCardRequestModel } from 'cielo';
import { CieloConfig } from 'src/configs/cielo.cofig';
import { InternalServerErrorException } from '@nestjs/common';

@EntityRepository(Payment)
export class PaymentRepository extends Repository<Payment> {
  private cieloParams: CieloConstructor = {
    merchantId: CieloConfig.merchantId,
    merchantKey: CieloConfig.merchantKey,
    sandbox: true, // Opcional - Ambiente de Testes
  };

  private cielo = new Cielo(this.cieloParams);
  async savePayment(createPaymentCieloCreditCardDto: CreatePaymentCieloCreditCardDto): Promise<Payment> {
    const { customer, merchantOrderId, payment, productName, ownerEmail} = createPaymentCieloCreditCardDto
    const paymentEntity = this.create();
    const paymentParams: TransactionCreditCardRequestModel = {
      customer: {
        name: customer.name,
        identity: customer.identity,
        identityType: customer.identityType,
        email: customer.email,
        Address: {
          street: customer.deliveryAddress.street,
          number: customer.deliveryAddress.number,
          complement: customer.deliveryAddress.complement,
          zipCode: customer.deliveryAddress.zipCode,
          city: customer.deliveryAddress.city,
          state: customer.deliveryAddress.state,
          country: customer.deliveryAddress.country,
        },
      },
      merchantOrderId: merchantOrderId,
      payment: {
        amount: payment.amount, // R$100,00
        creditCard: {
          brand: EnumBrands[payment.creditCard.brand],
          cardNumber: payment.creditCard.cardNumber,
          holder: payment.creditCard.holder,
          expirationDate: payment.creditCard.expirationDate,
          securityCode: payment.creditCard.securityCode
        },
        installments: payment.installments,
        softDescriptor: 'Banzeh',
        type: EnumCardType.CREDIT,
        capture: false,
      },
    };
    const finishPayment = await this.cielo.creditCard.transaction(paymentParams);
    const paymentLinkCapture = finishPayment.payment.links[0]['href'];
    paymentEntity.ownerEmail = ownerEmail;
    paymentEntity.paymentUrl = paymentLinkCapture;
    paymentEntity.productName = productName;
    try {
      await paymentEntity.save();
      return paymentEntity;
    } catch (error) {
      throw new InternalServerErrorException('Erro no processamento do pagamento', error);

    }
  }
}