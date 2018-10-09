import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import {ProcessOrderFormComponent} from "./components/process-order-form.component";
import { ExampleDirective } from './directives/example.directive';
import { ExamplePipe } from './example.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookListComponent,
    CartComponent,
    CartItemComponent,
    ProcessOrderFormComponent,
    ExampleDirective,
    ExamplePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [BookListComponent]
})
export class AppModule { }
