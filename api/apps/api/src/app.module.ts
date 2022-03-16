import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// our libraries
import { ProductsModule } from './products/products.module';
import { CartItemsModule } from './cart-items/cart-items.module';

@Module({
  imports: [ProductsModule, CartItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
