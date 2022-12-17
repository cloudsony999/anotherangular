import { Component, OnInit } from '@angular/core';
import { GetProductsNameService } from '../get-products-name.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent 
  implements OnInit{
    prod1:any;
    constructor(private svc: GetProductsNameService){}
  ngOnInit() {
    this.prod1=this.svc.getFirstProduct();    
  }
    
   
    
  
}
