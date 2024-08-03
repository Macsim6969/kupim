import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EasyStepsComponent } from './easy-steps.component';
import { ShareModule } from '../../shared/modules/share.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: EasyStepsComponent }
]

@NgModule({
  declarations: [
    EasyStepsComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    EasyStepsComponent
  ]
})
export class EasyStepsModule { }
