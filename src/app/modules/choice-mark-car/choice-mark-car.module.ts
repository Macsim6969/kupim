import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoiceMarkCarComponent } from './choice-mark-car.component';
import { ShareModule } from '../../shared/modules/share.module';

@NgModule({
  declarations: [
    ChoiceMarkCarComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports: [
    ChoiceMarkCarComponent
  ]
})
export class ChoiceMarkCarModule { }
