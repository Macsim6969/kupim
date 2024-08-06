import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../../shared/modules/share.module';
import { WelcomeModule } from '../welcome/welcome.module';
import { AddressDataComponent } from './shared/components/address-data/address-data.component';
import { FooterModule } from '../footer/footer.module';
import { WelcomeComponent } from '../welcome/welcome.component';

const routes: Routes = [
  { path: '', component: ContactsComponent }
]

@NgModule({
  declarations: [
    ContactsComponent,
    AddressDataComponent
  ],
  imports: [
    CommonModule,
    WelcomeModule,
    FooterModule,
    RouterModule.forChild(routes),
    ShareModule
  ]
})
export class ContactsModule { }
