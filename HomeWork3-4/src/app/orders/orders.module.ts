import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProcessOrderFormComponent} from './components/process-order-form/process-order-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ProcessOrderFormComponent],
  exports: [ProcessOrderFormComponent]
})
export class OrdersModule {
}
