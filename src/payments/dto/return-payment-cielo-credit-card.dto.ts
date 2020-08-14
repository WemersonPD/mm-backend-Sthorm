import { Products } from 'src/products/product.entity';
import { TransactionCreditCardResponseModel } from "cielo";

export class ReturnPaymentCieloCreditCardDto {
  payment: TransactionCreditCardResponseModel;
  product: Products;
  owner: string;
}