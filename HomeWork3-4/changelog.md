1) Created project structure by using Angular CLI (ng g new HomeWork3; ng g c ..(/path/name) ..(key); 
ng g cl ..(/path/index.ts);
2) Created modules  by using Angular CLI ( ng g m ..(/path/name));
3) Add re-imports to index.ts files;
4)Changed components registration, moved from AppModule to appropriate modules;
5)Added CartComponent, BookListComponent, ProcessOrderFormComponent in the export section  in  appropriate modules;
6)Added <app-cart/> and <app-book-list/> tags in app.component.html;
7)Created BookModel and CartItemModel (ng g cl ..(/path/name.model) ..(key));
8)Created array<BookModel> with 3 items in BookListComponent and listed in book-list.component.html using *ngfor;
9)Created array<CartItemModel> with 3 items in CartComponent and listed in cart.component.html using *ngfor;
10)Added form in process-order-form.component.html  with text inputs and button.
