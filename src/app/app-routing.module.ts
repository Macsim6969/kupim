import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'contacts', loadChildren: () => import('./modules/contacts/contacts.module').then(m => m.ContactsModule) },
  { path: 'team', loadChildren: () => import('./modules/team/team.module').then(m => m.TeamModule) },
  { path: 'legal-information', loadChildren: () => import('./modules/page-in-work/page-in-work.module').then(m => m.PageInWorkModule) },
  { path: 'review', loadChildren: () => import('./modules/page-in-work/page-in-work.module').then(m => m.PageInWorkModule) },
  { path: 'online-appraisal', loadChildren: () => import('./modules/page-in-work/page-in-work.module').then(m => m.PageInWorkModule) },
  { path: 'about-us', loadChildren: () => import('./modules/page-in-work/page-in-work.module').then(m => m.PageInWorkModule) },
  { path: 'blog', loadChildren: () => import('./modules/page-in-work/page-in-work.module').then(m => m.PageInWorkModule) },
  { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
