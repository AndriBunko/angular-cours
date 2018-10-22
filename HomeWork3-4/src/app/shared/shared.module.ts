import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighLightDirective } from './directives/high-light.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HighLightDirective],
  exports: [HighLightDirective]
})
export class SharedModule { }
