import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeedDocsComponent } from './need-docs.component';
import { ShareModule } from '../../shared/modules/share.module';

@NgModule({
  declarations: [
    NeedDocsComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports: [
    NeedDocsComponent
  ]
})
export class NeedDocsModule { }
