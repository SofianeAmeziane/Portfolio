import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';

@Injectable()
export class PortfolioService {
  getPortfolios = async (dataPath: string) => {
    try {
      const buffer = await readFile(dataPath, {
        encoding: 'utf-8',
      });
      const portfolios = JSON.parse(buffer);
      return portfolios;
    } catch (err: any) {
      throw new Error(err.message);
    }
  };
}
