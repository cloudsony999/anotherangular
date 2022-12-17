import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, x } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetProductsNameService } from './get-products-name.service';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    x
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GetProductsNameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
