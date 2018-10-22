import {Component, OnInit} from '@angular/core';
import {BookModel} from '../../models/book.model';
import {BookService} from '../../services/book.service';
import {CartService} from '../../../cart/services/cart.service';
import {ComunicatorService} from '../../../shared/services/comunicator.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public books: Array<BookModel>;
  public booksP: Promise<Array<BookModel>>;

  constructor(private bookService: BookService, private cartService: CartService, private communicatorService: ComunicatorService) {
  }

  ngOnInit() {
    this.books = [
      new BookModel(1, 'Angular', 200),
      new BookModel(2, 'Java', 500),
      new BookModel(3, 'JS', 150)
    ];
    this.booksP = this.bookService.getBooksAsync();
  }

  onBuy(book: BookModel): void {
   // this.cartService.addToCart(book);
    this.communicatorService.publishData(book);
    console.log(`${book.name}`);
  }
}
