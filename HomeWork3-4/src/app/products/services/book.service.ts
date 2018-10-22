import {Injectable, OnInit} from '@angular/core';
import {BookModel} from '../models/book.model';
import {resolve} from 'q';

@Injectable({
  providedIn: 'root'
})

export class BookService  {
  books: Array<BookModel> = [
    new BookModel(1, 'Angular', 200),
    new BookModel(2, 'Java', 500),
    new BookModel(3, 'JS', 150)
  ];

  constructor() {
  }

  getBooksAsync(): Promise<Array<BookModel>> {
    // return new Promise<Array<BookModel>>(() => {
    //   setTimeout(() => resolve(this.books), 1000);
    // });
    console.log('dddddddddddddddddddd');
    return Promise.resolve(this.books);
  }
}


