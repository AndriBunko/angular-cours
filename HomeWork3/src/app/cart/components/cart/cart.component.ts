import { Component, OnInit } from '@angular/core';
import {BookModel} from "../../../products/models/book.model";
import {CartItemModel} from "../../models/cart-item.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  buyItem: Array<CartItemModel>;
  constructor() { }

  ngOnInit() {
    this.buyItem = [
      {"id": 1, "name": "Java"},
      {"id": 2, "name": "Angular"},
      {"id": 3, "name": "JS"}
    ]

  }

}
