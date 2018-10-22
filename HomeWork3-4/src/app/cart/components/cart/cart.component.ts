import {Component, OnInit} from '@angular/core';
import {CartItemModel} from '../../models/cart-item.model';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  boughtItems: Array<CartItemModel>;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.boughtItems = this.cartService.getCartItems();
  }

  onDelItem(item: CartItemModel) {
    console.log(`del eitem: ${item.name}`);
    this.cartService.delFromCart(item);
  }

  onAdd(item: CartItemModel) {
    console.log(`add qauntity: ${item.name}`);
    this.cartService.incQuantity(item, 1);
  }

  onMinus(item: CartItemModel) {
    console.log(`add qauntity: ${item.name}`);
    this.cartService.decQuantity(item, 1);
  }
}
