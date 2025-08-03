import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EasyStepsComponent} from './easy-steps.component';
import {ShareModule} from '../../shared/modules/share.module';
import {RouterLink} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    EasyStepsComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    EasyStepsComponent
  ]
})
export class EasyStepsModule {
}
