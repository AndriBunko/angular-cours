import {Component, OnInit} from '@angular/core';
import {CartItemModel} from '../../models/cart-item.model';
import {CartService} from '../../services/cart.service';
import {Subscription} from 'rxjs';
import {ComunicatorService} from '../../../shared/services/comunicator.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  boughtItems: Array<CartItemModel>;
  totalPrice: number;
  totalCount: number;
  private sub: Subscription;

  constructor(private cartService: CartService, private communicatorService: ComunicatorService) {
  }

  ngOnInit() {
    this.boughtItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalsPrice();
    this.totalCount = this.cartService.updateTotals();
    this.sub = this.communicatorService.channel$.subscribe(
      data => {
        this.cartService.addToCart(data);
        this.totalPrice = this.cartService.getTotalsPrice();
        this.totalCount = this.cartService.updateTotals();
      }
    );
  }

  onDelItem(item: CartItemModel) {
    console.log(`del eitem: ${item.name}`);
    this.cartService.delFromCart(item);
    this.totalPrice = this.cartService.getTotalsPrice();
    this.totalCount = this.cartService.updateTotals();
  }

  onAdd(item: CartItemModel) {
    console.log(`add qauntity: ${item.name}`);
    this.cartService.incQuantity(item, 1);
    this.totalPrice = this.cartService.getTotalsPrice();
    this.totalCount = this.cartService.updateTotals();
  }

  onMinus(item: CartItemModel) {
    console.log(`add qauntity: ${item.name}`);
    this.cartService.decQuantity(item, 1);
    this.totalPrice = this.cartService.getTotalsPrice();
    this.totalCount = this.cartService.updateTotals();
  }

  onCreateOrder(event: any) {
    console.log( this.boughtItems);
  }
}
