import {Injectable, OnInit} from '@angular/core';
import {BookModel} from '../models/book.model';
import {resolve} from 'q';

@Injectable({
  providedIn: 'root'
})

export class BookService  {
  books: Array<BookModel> = [
    new BookModel(2, 'Angular', 200),
    new BookModel(1, 'Java', 500),
    new BookModel(3, 'JS', 150)
  ];

  constructor() {
  }

  getBooksAsync(): Promise<Array<BookModel>> {
    return new Promise<Array<BookModel>>((resolve, reject) => {
      setTimeout(() => resolve(this.books), 1000);
    });
  }
}


