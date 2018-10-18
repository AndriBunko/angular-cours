import {Component, Input, OnInit} from '@angular/core';
import {BookModel} from "../../../products/models/book.model";
import {CartItemModel} from "../../models/cart-item.model";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input()
  boughtBook: CartItemModel;

  constructor() {
  }

  ngOnInit() {
  }

}
