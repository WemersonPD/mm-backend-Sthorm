
export class CreatePaymentCieloCreditCardDto {
  customer: {
    name: string,
    identity: string,
    identityType: string,
    email: string,
    deliveryAddress: {
      street: string,
      number: string,
      complement: string,
      zipCode: string,
      city: string,
      state: string,
      country: string,
    },
  };
  merchantOrderId: string;
  payment: {
    amount: number, // R$100,00
    creditCard: {
      brand: string,
      cardNumber: string,
      holder: string,
      expirationDate: string,
    },
    installments: number,
    softDescriptor: string,
    type: string,
    capture: false,
  };
}