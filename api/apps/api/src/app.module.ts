import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// our libraries
import { DataModule } from '@app/data';

@Module({
  imports: [DataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
