import {Component, OnInit} from '@angular/core';
import {BookModel} from "../../models/book.model";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public books: Array<BookModel>;

  constructor() {
  }

  ngOnInit() {
    this.books = [
      new BookModel(1, 'Angular'),
      new BookModel(2, 'Java'),
      new BookModel(3, 'JS')
    ];
  }
}
