import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdInfoComponent } from './prod-info.component';
import { ShareModule } from '../../shared/modules/share.module';

@NgModule({
  declarations: [
    ProdInfoComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports: [
    ProdInfoComponent
  ]
})
export class ProdInfoModule { }
