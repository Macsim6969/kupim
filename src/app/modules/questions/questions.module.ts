import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './questions.component';
import { ShareModule } from '../../shared/modules/share.module';

@NgModule({
  declarations: [
    QuestionsComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports: [
    QuestionsComponent
  ]
})
export class QuestionsModule { }
