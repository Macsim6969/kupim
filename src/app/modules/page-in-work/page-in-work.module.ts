import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageInWorkComponent } from './page-in-work.component';
import { ShareModule } from '../../shared/modules/share.module';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeModule } from '../welcome/welcome.module';
import { FooterModule } from '../footer/footer.module';

const routes: Routes = [
  { path: '', component: PageInWorkComponent }
]

@NgModule({
  declarations: [
    PageInWorkComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    WelcomeModule,
    FooterModule,
    RouterModule.forChild(routes)
  ]
})
export class PageInWorkModule { }
