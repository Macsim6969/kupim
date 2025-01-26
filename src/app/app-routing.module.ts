import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'fl/contacts',
    loadChildren: () =>
      import('./modules/contacts/contacts.module').then(
        (m) => m.ContactsModule
      ),
  },
  {
    path: 'fl/online-appraisal',
    loadChildren: () =>
      import('./modules/online-appraisal/online-appraisal.module').then(
        (m) => m.OnlineAppraisalModule
      ),
  },
  {
    path: 'fl/team',
    loadChildren: () =>
      import('./modules/team/team.module').then((m) => m.TeamModule),
  },
  {
    path: 'fl/legal-information',
    loadChildren: () =>
      import('./modules/page-in-work/page-in-work.module').then(
        (m) => m.PageInWorkModule
      ),
  },
  {
    path: 'fl/review',
    loadChildren: () =>
      import('./modules/review/review.module').then((m) => m.ReviewModule),
  },
  {
    path: 'fl/about-us',
    loadChildren: () =>
      import('./modules/about-us/about-us.module').then((m) => m.AboutUsModule),
  },
  {
    path: 'fl/blog',
    loadChildren: () =>
      import('./modules/blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'fl/others',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'fl/real-estate-others',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'fl',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/fl'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
