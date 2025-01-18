import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../../shared/modules/share.module';
import { SliderComponent } from './slider.component';
import { DragScrollComponent, DragScrollItemDirective } from 'ngx-drag-scroll';
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    SliderComponent
  ],
    imports: [
        CommonModule,
        ShareModule,
        DragScrollComponent,
        DragScrollItemDirective,
        RouterLink
    ],
  exports: [
    SliderComponent
  ]
})
export class SliderModule { }
