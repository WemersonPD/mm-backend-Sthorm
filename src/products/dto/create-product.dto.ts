import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({
    message: 'Informe um nome para o produto',
  })
  name: string;

  @IsNotEmpty({
    message: 'Informe um preço para o produto',
  })
  price: number;

  @IsNotEmpty({
    message: 'Informe uma foto para o produto',
  })
  urlImage: string;

  @IsNotEmpty({
    message: 'Informe o tipo de produto',
  })
  type: string;
}
