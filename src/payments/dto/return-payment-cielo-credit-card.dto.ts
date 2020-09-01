// import { Products } from 'src/products/product.entity';
// import { TransactionCreditCardResponseModel } from "cielo";

export class ReturnPaymentCieloCreditCardDto {
  // payment: TransactionCreditCardResponseModel;
  id: string;
  productName: string;
  ownerEmail: string;
  urlImg: string;
  price: number;
  createdAt: Date;
  updateAt: Date;
}