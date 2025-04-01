import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EasyStepsComponent } from './easy-steps.component';
import { ShareModule } from '../../shared/modules/share.module';
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    EasyStepsComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    RouterLink
  ],
  exports: [
    EasyStepsComponent
  ]
})
export class EasyStepsModule { }
