import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';

@Injectable()
export class PortfoliosService {
  getPortfolios = async (dataPath: string) => {
    try {
      const buffer = await readFile(dataPath, {
        encoding: 'utf8',
      });
      const portfolios = JSON.parse(buffer);
      return portfolios;
    } catch (err: any) {
      console.log({ err });

      return err.message;
    }
  };
}
