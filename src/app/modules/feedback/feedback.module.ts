import { ShareModule } from '../../shared/modules/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from './feedback.component';



@NgModule({
  declarations: [
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports: [
    FeedbackComponent
  ]
})
export class FeedbackModule { }
