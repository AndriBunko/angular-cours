import {AbstractControl} from '@angular/forms';

export class DeliveryDateValidator {

  static deliveryDate(c: AbstractControl): { [key: string]: boolean } | null {

    const now = new Date();
    const inputDate = new Date(c.value);
    return null;
  }
}
