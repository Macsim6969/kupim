import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ShareModule } from '../../shared/modules/share.module';
import { WelcomeModule } from '../welcome/welcome.module';

const routes: Routes = [
  { path: '', component: HomeComponent , children: [
    {path: ':route', component: HomeComponent}
  ]}
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    WelcomeModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
