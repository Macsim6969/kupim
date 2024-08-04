import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { ShareModule } from '../../shared/modules/share.module';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
