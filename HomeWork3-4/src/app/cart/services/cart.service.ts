import {Injectable, OnInit} from '@angular/core';
import {CartItemModel} from '../models/cart-item.model';
import {BookModel} from '../../products/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  boughtItems: Array<CartItemModel> = [
    {'id': 1, 'name': 'Java', 'price': 500, 'quantity': 10},
    {'id': 2, 'name': 'Angular', 'price': 200, 'quantity': 15},
    {'id': 3, 'name': 'JS', 'price': 150, 'quantity': 5}
  ];
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

  delFromCart(item: CartItemModel) {
    const index = this.getElementIndex(item);
    this.boughtItems.splice(index, 1);
  }

  incQuantity(cartItem: CartItemModel, n: number) {
    const index = this.getElementIndex(cartItem);
    console.log(index);
    this.boughtItems[index].quantity += n;
  }

  decQuantity(cartItem: CartItemModel, n: number) {
    const index = this.getElementIndex(cartItem);
    console.log(index);
    this.boughtItems[index].quantity -= n;
  }

  public updateTotals(): number {
    let numOfItems = 0;
    for (const item of this.boughtItems) {
      numOfItems += item.quantity;
    }
    return numOfItems;
  }

  public getTotalsPrice() {
    let price = 0;
    for (const item of this.boughtItems) {
      price += (item.quantity * item.price);
    }
    return price;
  }

  private getElementIndex(element: BookModel | CartItemModel): number {
    return this.boughtItems.findIndex((it) => it.id === element.id);
  }
}
