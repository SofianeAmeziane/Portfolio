import { Injectable } from '@nestjs/common';
//import { readFile } from 'fs/promises';

@Injectable()
export class PortfoliosService {
  getPortfolios = async () => {
    try {
      //   const buffer = await readFile(dataPath, {
      //     encoding: 'utf-8',
      //   });
      //   const portfolios = JSON.parse(buffer);
      //   console.log(portfolios);
      return 'Portfoliossss';
    } catch (err: any) {
      throw new Error(err.message);
    }
  };
}
