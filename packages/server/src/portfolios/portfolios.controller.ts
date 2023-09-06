import { Controller, Get } from '@nestjs/common';
import { PortfoliosService } from './portfolios.service';
//import { Portfolio } from './portfolio.model';

// const PORTFOLIOS_PATH = '../server/DB/portfolios.json';

@Controller('portfolios')
export class PortfoliosController {
  constructor(private readonly portfolioService: PortfoliosService) {}

  @Get()
  async getPortfolios(): Promise<string> {
    const portfolios = await this.portfolioService.getPortfolios();
    return portfolios;
  }
}
