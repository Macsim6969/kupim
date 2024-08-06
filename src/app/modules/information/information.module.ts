import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../../shared/modules/share.module';
import { InformationComponent } from './information.component';
import { RouterModule, Routes } from '@angular/router';
import { InformationService } from '../../shared/services/information.service';

const routes: Routes = [
  { path: '', component: InformationComponent }
]

@NgModule({
  declarations: [
    InformationComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    InformationComponent
  ],
  providers: [
    InformationService
  ]
})
export class InformationModule { }
