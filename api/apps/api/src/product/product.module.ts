import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';

// modules from other projects
import { ProductEntityModule } from '@app/domain/product-entity/product-entity.module';

@Module({
  imports: [ProductEntityModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
