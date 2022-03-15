import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// our libraries
import { DataModule } from '@app/data';
import { ProductModule } from './product/product.module';

@Module({
  imports: [DataModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
