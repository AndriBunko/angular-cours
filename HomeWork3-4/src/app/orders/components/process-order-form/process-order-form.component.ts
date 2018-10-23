import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {OrderModel} from '../../model/order.model';
import {CartService} from '../../../cart/services/cart.service';

@Component({
  selector: 'app-process-order-form',
  templateUrl: './process-order-form.component.html',
  styleUrls: ['./process-order-form.component.css']
})
export class ProcessOrderFormComponent implements OnInit {
  static id = 1;
  processOrderForm: FormGroup;
  order: OrderModel;

  constructor(private catrtService: CartService) {
  }

  ngOnInit() {
    this.processOrderForm = new FormGroup({
      'userName': new FormControl(
        '', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]
      ),
      'userEmail': new FormControl('', [Validators.required, Validators.email]),
      'userPhone': new FormControl(
        '', [Validators.required, Validators.pattern('^\\+\\d{2}\\(\\d{3}\\)\\d{3}-\\d{2}-\\d{2}$')]
      ),
      'deliveryDate': new FormControl('', [])
    });
  }

  submit() {
    this.order = new OrderModel();
    this.order.orderId = ProcessOrderFormComponent.id;
    ProcessOrderFormComponent.id++;
    this.order.name = this.processOrderForm.get('userName').value;
    this.order.email = this.processOrderForm.get('userEmail').value;
    this.order.phone = this.processOrderForm.get('userPhone').value;
    this.order.totalQuantity = this.catrtService.updateTotals();
    this.order.totalSum = this.catrtService.getTotalsPrice();
    this.order.products = this.catrtService.getCartItems();
    if (this.processOrderForm.get('deliveryDate').value) {
      this.order.ddate = this.processOrderForm.get('deliveryDate').value;
    } else {
      this.order.ddate = null;
    }
    console.log(this.order);
  }

}
