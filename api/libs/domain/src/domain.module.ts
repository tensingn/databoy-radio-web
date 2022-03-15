import { Module } from '@nestjs/common';
import { DomainService } from './domain.service';
import { ProductModule } from './product/product.module';
import { ProductEntityModule } from './product-entity/product-entity.module';
import { EnumsModule } from './enums/enums.module';

@Module({
  providers: [DomainService],
  exports: [DomainService],
  imports: [ProductModule, ProductEntityModule, EnumsModule],
})
export class DomainModule {}
