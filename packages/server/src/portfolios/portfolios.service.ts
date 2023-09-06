import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';

@Injectable()
export class PortfoliosService {
  getPortfolios = async (dataPath: string) => {
    try {
      const data = await readFile(dataPath, {
        encoding: 'utf8',
      });

      //const portfolios = JSON.parse(data);
      return data;
    } catch (err: any) {
      throw new Error(err.message);
    }
  };
}
