import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {BookModel} from "../../models/book.model";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  // styleUrls: ['./book.component.css']
  styles: [`
    p {
      border: 2px solid red;
      background-color: dodgerblue;
      text-align: center;
      margin-bottom: 20px;
    }

    .homework {
      width: 200px;
      border: 2px solid red;
      background-color: yellow;
      text-align: center;
      margin-bottom: 20px;
      font-family: "Comic Sans MS";
      font-size: 20px;
    }

    .inlbl {
      display: inline-block;
    }`],
  encapsulation: ViewEncapsulation.None

})
export class BookComponent implements OnInit {
  @Input()
  book: BookModel;
  @Output()
  buy: EventEmitter<BookModel> = new EventEmitter<BookModel>();

  constructor() {
  }

  ngOnInit() {
  }

  onBuy(event: any) {
    console.log(`Товар куплен ${this.book.name}`);
    this.buy.emit(this.book);
  }

}
