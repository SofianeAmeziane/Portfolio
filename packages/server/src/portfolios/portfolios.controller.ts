import { Controller, Get } from '@nestjs/common';
import { PortfoliosService } from './portfolios.service';
import { Portfolio } from './portfolio.model';

const PORTFOLIOS_PATH = './src/DB/portfolios.json';

@Controller('portfolios')
export class PortfoliosController {
  constructor(private readonly portfolioService: PortfoliosService) {}

  @Get()
  async getPortfolios(): Promise<Portfolio> {
    const portfolios = await this.portfolioService.getPortfolios(
      PORTFOLIOS_PATH,
    );
    return portfolios;
  }
}
