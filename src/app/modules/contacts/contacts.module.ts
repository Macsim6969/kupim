import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../../shared/modules/share.module';
import { WelcomeModule } from '../welcome/welcome.module';

const routes: Routes = [
  { path: '', component: ContactsComponent }
]

@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    WelcomeModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactsModule { }
