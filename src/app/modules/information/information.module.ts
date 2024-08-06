import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../../shared/modules/share.module';
import { InformationComponent } from './information.component';
import { InformationService } from '../../shared/services/information.service';

@NgModule({
  declarations: [
    InformationComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports: [
    InformationComponent
  ],
  providers: [
    InformationService
  ]
})
export class InformationModule { }
