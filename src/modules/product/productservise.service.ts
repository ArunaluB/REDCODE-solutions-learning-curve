/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductServiseService {


  getAllproduct() {
    return 'All Product[apple]';
  }
 }
