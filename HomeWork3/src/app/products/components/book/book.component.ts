import {Component, Input, OnInit} from '@angular/core';
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
      border: 2px solid red;
      background-color: yellow;
      text-align: center;
      margin-bottom: 20px;
      font-family: "Comic Sans MS";
      font-size: 20px;
    }`]

})
export class BookComponent implements OnInit {
  @Input()
  book: BookModel;

  constructor() {
  }

  ngOnInit() {
  }

}
