import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponent } from './products/components/book/book.component';
import { BookListComponent } from './products/components/book-list/book-list.component';
import {ProductsModule} from "./products/products.module";
import {CartModule} from "./cart/cart.module";
import {SharedModule} from "./shared/shared.module";
import {OrdersModule} from "./orders/orders.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    CartModule,
    SharedModule,
    OrdersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
