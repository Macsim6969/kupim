import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../../shared/modules/share.module';
import { ChoiceProductsComponent } from './choice-products.component';


@NgModule({
  declarations: [
    ChoiceProductsComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports: [
    ChoiceProductsComponent
  ]
})
export class ChoiceProductsModule { }
