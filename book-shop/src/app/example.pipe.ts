import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simplePipe'
})
export class ExamplePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    let result: string = value;
    if (value !== null) {
      result = value.replace(',', ' ');
      result = result.toUpperCase();
    }
    return result;
  }

}
