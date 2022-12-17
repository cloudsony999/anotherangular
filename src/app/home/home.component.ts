import { Component, OnInit } from '@angular/core';
import { GetProductsNameService } from '../get-products-name.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  prod1:any;
  constructor(private svc: GetProductsNameService){}
  ngOnInit() {
    this.prod1=this.svc.getFirstProduct();
   
  }

  

}
