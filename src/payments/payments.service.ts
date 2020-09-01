import { Payment } from './payment.entity';
import { CreatePaymentCieloCreditCardDto } from './dto/create-payment-cielo-credit-card.dto';
import { CieloConfig } from './../configs/cielo.cofig';
import { Injectable } from '@nestjs/common';
import {
  CieloConstructor,
  Cielo,
} from 'cielo';
import { PaymentRepository } from './payment.repository';

@Injectable()
export class PaymentsService {
  private cieloParams: CieloConstructor = {
    merchantId: CieloConfig.merchantId,
    merchantKey: CieloConfig.merchantKey,
    sandbox: true, // Opcional - Ambiente de Testes
  };

  private cielo = new Cielo(this.cieloParams);

  constructor(
    private paymenteRepository: PaymentRepository,
  ) { }
  async createPayment(createPaymentCieloCreditCardDto: CreatePaymentCieloCreditCardDto): Promise<Payment> {
    return this.paymenteRepository.savePayment(createPaymentCieloCreditCardDto);
  }
  async gateOrderHistoryByOwnerEmail(ownerEmail: string): Promise<Payment[]> {
    return await this.paymenteRepository.find({where: {ownerEmail}})
  }
}
