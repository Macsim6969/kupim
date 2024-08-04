import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutInfoComponent } from './about-info.component';
import { ShareModule } from '../../shared/modules/share.module';



@NgModule({
  declarations: [
    AboutInfoComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports: [
    AboutInfoComponent
  ]
})
export class AboutInfoModule { }
