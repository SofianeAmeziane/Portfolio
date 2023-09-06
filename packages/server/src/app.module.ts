import { Module } from '@nestjs/common';
import { PortfoliosModule } from './portfolios/portfolios.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [PortfoliosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
