import { Controller, Get } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { Portfolio } from './portfolio.model';

const PORTFOLIOS_PATH = '../server/DB/portfolios.json';
@Controller('portfolios')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get()
  async getPortfolios(): Promise<Portfolio> {
    const portfolios = await this.portfolioService.getPortfolios(
      PORTFOLIOS_PATH,
    );
    return portfolios;
  }
}
