import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../../shared/modules/share.module';
import { SliderComponent } from './slider.component';
import { DragScrollComponent, DragScrollItemDirective } from 'ngx-drag-scroll';

@NgModule({
  declarations: [
    SliderComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    DragScrollComponent,
    DragScrollItemDirective
  ],
  exports: [
    SliderComponent
  ]
})
export class SliderModule { }
