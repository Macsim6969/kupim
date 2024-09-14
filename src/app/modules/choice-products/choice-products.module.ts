import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../../shared/modules/share.module';
import { ChoiceProductsComponent } from './choice-products.component';
import { ChoiceIconService } from './shared/services/ChoiceIcon.service';


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
  ],
  providers: [
    ChoiceIconService
  ]
})
export class ChoiceProductsModule { }
