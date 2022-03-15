import { Module } from '@nestjs/common';
import { Product } from './product.entity';

@Module({
  imports: [Product],
  exports: [Product],
})
export class ProductEntityModule {}
