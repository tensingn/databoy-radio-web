import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { Observable, of } from 'rxjs';
import { Product } from '@app/domain/product-entity/product.entity';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll(): Observable<Product[]> {
    return of(this.productService.findAll());
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }
}
