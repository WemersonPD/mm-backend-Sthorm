import { Products } from "../product.entity";

export class ReturnProductsDto {
    products: Products[];
    message: string;
}