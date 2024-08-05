import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../../shared/modules/share.module';


@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports: [
    WelcomeComponent
  ]
})
export class WelcomeModule { }
