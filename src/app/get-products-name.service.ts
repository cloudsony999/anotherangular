import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetProductsNameService {

  constructor() {

   }

products:any;
prod1:any;
  getFirstProduct()
  {
    this.products=['TV','MOBILE','FRIDGE'];
    this.prod1=this.products[1];
    return this.prod1;
  }
}
