
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
  ValidationPipe,
  
  
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateProductDto } from './dto/create-product.dto';
import { ReturnProductDto } from './dto/return-product.dto';
import { ProductsService } from './products.service';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from './utils/file-upload.utils';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './files',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async uploadedFile(@UploadedFile() file) {
    const response = {
      originalname: file.originalname,
      filename: file.filename,
    };
    return response;
  }


  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @Get(':imgpath')
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    seeUploadedFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: './files' });
  }

  

  @Post('/createProduct')
  async createProduct(
    @Body(ValidationPipe) createProductDto: CreateProductDto,
  ): Promise<ReturnProductDto> {
    const product = await this.productService.createProduct(createProductDto);

    return {
      product,
      message: 'Produto criado com sucesso',
    };
  }
}
