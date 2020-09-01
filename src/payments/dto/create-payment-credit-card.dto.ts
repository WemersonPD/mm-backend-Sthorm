export class CreatePaymentCreditCardDto {
  reference_id: "ex-00001";
  description: string;
  amount: {
    value: number;
    currency: string;
  };
  payment_method: {
    type: "CREDIT_CARD";
    installments: number;
    capture: false;
    card: {
      number: string;
      exp_month: string;
      exp_year: string;
      security_code: string;
      holder: {
        name: string;
      }
    }
  }
}