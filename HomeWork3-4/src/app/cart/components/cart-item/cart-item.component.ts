import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  @Output()
  addQauntity: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();
  @Output()
  minusQauntity: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();

  constructor() {
  }

  ngOnInit() {
  }

  onAdd(addQauntity: any) {
    console.log(`on add: ${this.boughtBook.name}`);
    this.addQauntity.emit(this.boughtBook);
  }

  onMinus(minusQauntity: any) {
    console.log(`on minus${this.boughtBook.name}`);
    this.minusQauntity.emit(this.boughtBook);
  }
}
