import { DataService } from '@app/data';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataService: DataService,
  ) {}

  @Get()
  getHello(): string {
    this.dataService.testMethod();
    return this.appService.getHello();
  }
}
