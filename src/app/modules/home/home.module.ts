import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ShareModule } from '../../shared/modules/share.module';
import { WelcomeModule } from '../welcome/welcome.module';
import { ProdInfoModule } from '../prod-info/prod-info.module';
import { EasyStepsModule } from '../easy-steps/easy-steps.module';
import { AboutInfoModule } from '../about-info/about-info.module';
import { InformationModule } from '../information/information.module';
import { FeedbackModule } from '../feedback/feedback.module';
import { QuestionsModule } from '../questions/questions.module';
import { FooterModule } from '../footer/footer.module';
import { NeedDocsModule } from '../need-docs/need-docs.module';
import { ChoiceProductsModule } from '../choice-products/choice-products.module';
import { ChoiceMarkCarModule } from '../choice-mark-car/choice-mark-car.module';
import { LoadingComponent } from '../../shared/components/loading/loading.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'transport', component: HomeComponent },
      { path: 'laptop', component: HomeComponent },
      { path: 'bike', component: HomeComponent },
      { path: 'airplane', component: HomeComponent },
      { path: 'helicopter', component: HomeComponent },
      { path: 'wheelchair', component: HomeComponent },
      { path: 'motorcycle', component: HomeComponent },
      { path: 'scooter', component: HomeComponent },
      { path: 'watercraft', component: HomeComponent },
      { path: 'tractor', component: HomeComponent },
      { path: 'trailer', component: HomeComponent },
      { path: 'gear', component: HomeComponent },
      { path: 'exercise-machines', component: HomeComponent },
      { path: 'skis', component: HomeComponent },
      { path: 'snowboard', component: HomeComponent },
      { path: 'surfboard', component: HomeComponent },
      { path: 'electronics', component: HomeComponent },
      { path: 'air-conditioner', component: HomeComponent },
      { path: 'building-tool', component: HomeComponent },
      { path: 'cacuum-cleaner', component: HomeComponent },
      { path: 'camera', component: HomeComponent },
      { path: 'coffee-maker', component: HomeComponent },
      { path: 'computer', component: HomeComponent },
      { path: 'drone', component: HomeComponent },
      { path: 'fridge', component: HomeComponent },
      { path: 'gaming-consoles', component: HomeComponent },
      { path: 'headphones', component: HomeComponent },
      { path: 'lawn-mower', component: HomeComponent },
      { path: 'lens', component: HomeComponent },
      { path: 'phone', component: HomeComponent },
      { path: 'smartwatch', component: HomeComponent },
      { path: 'tablets', component: HomeComponent },
      { path: 'tv', component: HomeComponent },
      { path: 'vr-headsets', component: HomeComponent },
      { path: 'washing-machine', component: HomeComponent },
      { path: 'real-estate', component: HomeComponent },
      { path: 'apartment', component: HomeComponent },
      { path: 'garage', component: HomeComponent },
      { path: 'house', component: HomeComponent },
      { path: 'land-lots', component: HomeComponent },
      { path: 'restaurant-cafe', component: HomeComponent },
      { path: 'townhouse', component: HomeComponent },
      { path: 'warehouse-facilities', component: HomeComponent },
      {
        path: 'car', component: HomeComponent, children: [
          { path: 'bmw', component: HomeComponent },
          { path: 'audi', component: HomeComponent },
          { path: 'mercedes', component: HomeComponent },
          { path: 'opel', component: HomeComponent },
          { path: 'porshe', component: HomeComponent },
          { path: 'smart', component: HomeComponent },
          { path: 'volkswagen', component: HomeComponent }
        ]
      }
    ]
  }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    WelcomeModule,
    ChoiceProductsModule,
    ProdInfoModule,
    EasyStepsModule,
    NeedDocsModule,
    AboutInfoModule,
    InformationModule,
    ChoiceMarkCarModule,
    FeedbackModule,
    QuestionsModule,
    FooterModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
