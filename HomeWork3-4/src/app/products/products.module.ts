import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookComponent, BookListComponent} from './components';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BookComponent,
    BookListComponent
  ],
  exports: [BookListComponent]
})
export class ProductsModule {
}
