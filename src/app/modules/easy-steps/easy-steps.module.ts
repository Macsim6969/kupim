import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EasyStepsComponent } from './easy-steps.component';
import { ShareModule } from '../../shared/modules/share.module';

@NgModule({
  declarations: [
    EasyStepsComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports: [
    EasyStepsComponent
  ]
})
export class EasyStepsModule { }
