import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdInfoComponent } from './prod-info.component';
import { ShareModule } from '../../shared/modules/share.module';
import { ProdIconService } from './shared/services/ChoiceIcon.service';

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
  ],
  providers: [
    ProdIconService
  ]
})
export class ProdInfoModule { }
