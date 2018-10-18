import { Component, OnInit } from '@angular/core';
import {CartItemModel} from "../../models/cart-item.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  boughtItems: Array<CartItemModel>;
  constructor() { }

  ngOnInit() {
    this.boughtItems = [
      {"id": 1, "name": "Java", "quantity": 10},
      {"id": 2, "name": "Angular", "quantity": 15},
      {"id": 3, "name": "JS", "quantity": 5}
    ]
  }

    onAdd(item: CartItemModel) {
      console.log(`add qauntity: ${item.name}`);
      const index = this.boughtItems.findIndex((p) => p.id === item.id);
      if (index !== -1) {
          this.boughtItems[index].quantity++;
      }
    }

  onMinus(item: CartItemModel) {
    console.log(`minus qauntity: ${item.name}`);
    const index = this.boughtItems.findIndex((it) => it.id === item.id);
    if (index !== -1) {
      if (this.boughtItems[index].quantity > 1) {
        this.boughtItems[index].quantity--;
      }
    }
  }
}
