import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdInfoComponent } from './prod-info.component';
import { ShareModule } from '../../shared/modules/share.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: ProdInfoComponent}
]

@NgModule({
  declarations: [
    ProdInfoComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ProdInfoComponent
  ]
})
export class ProdInfoModule { }
