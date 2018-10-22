import {Injectable, OnInit} from '@angular/core';
import {CartItemModel} from '../models/cart-item.model';
import {BookModel} from '../../products/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {
  boughtItems: Array<CartItemModel> = [
    {'id': 1, 'name': 'Java', 'price': 500, 'quantity': 10},
    {'id': 2, 'name': 'Angular', 'price': 200, 'quantity': 15},
    {'id': 3, 'name': 'JS', 'price': 150, 'quantity': 5}
  ];
  numOfItems: number;
  price: number;

  constructor() {
  }

  getCartItems(): Array<CartItemModel> {
    return this.boughtItems;
  }

  addToCart(book: BookModel) {
    const index = this.getElementIndex(book);
    if (index !== -1) {
      this.boughtItems[index].quantity++;
    } else {
      this.boughtItems.push(new CartItemModel(book.id, book.name, book.price, book.img, 1));
    }
  }

  delFromCart(book: BookModel) {
    const index = this.getElementIndex(book);
    this.boughtItems.slice(index, index);
  }

  incQuantity(cartItem: CartItemModel, n: number) {
    const index = this.getElementIndex(cartItem);
    this.boughtItems[index].quantity += n;
  }

  decQuantity(cartItem: CartItemModel, n: number) {
    const index = this.getElementIndex(cartItem);
    this.boughtItems[index].quantity -= n;
  }

  private updateTotals(): number {
    let numOfItems: number;
    for (const item of this.boughtItems) {
      numOfItems += item.quantity;
    }
    return numOfItems;
  }

  private getPrice() {
    let price: number;
    for (const item of this.boughtItems) {
      price += item.quantity * item.price;
    }
    return price;
  }

  private getElementIndex(element: BookModel | CartItemModel): number {
    return this.boughtItems.findIndex((it) => it.id === element.id);
  }

  ngOnInit(): void {
    this.numOfItems = this.updateTotals();
    this.price = this.getPrice();
  }
}
