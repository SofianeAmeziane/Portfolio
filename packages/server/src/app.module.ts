import { Module } from '@nestjs/common';
import { PortfoliosModule } from './portfolios/portfolios.module';

@Module({
  imports: [PortfoliosModule],
})
export class AppModule {}
