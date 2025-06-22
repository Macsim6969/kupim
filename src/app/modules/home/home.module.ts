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
      { path: 'fl/transport', component: HomeComponent },
      { path: 'fl/laptop', component: HomeComponent },
      { path: 'fl/bike', component: HomeComponent },
      { path: 'fl/airplane', component: HomeComponent },
      { path: 'fl/helicopter', component: HomeComponent },
      { path: 'fl/wheelchair', component: HomeComponent },
      { path: 'fl/motorcycle', component: HomeComponent },
      { path: 'fl/scooter', component: HomeComponent },
      { path: 'fl/watercraft', component: HomeComponent },
      { path: 'fl/tractor', component: HomeComponent },
      { path: 'fl/trailer', component: HomeComponent },
      { path: 'fl/gear', component: HomeComponent },
      { path: 'fl/exercise-machines', component: HomeComponent },
      { path: 'fl/skis', component: HomeComponent },
      { path: 'fl/snowboard', component: HomeComponent },
      { path: 'fl/surfboard', component: HomeComponent },
      { path: 'fl/electronics', component: HomeComponent },
      { path: 'fl/air-conditioner', component: HomeComponent },
      { path: 'fl/building-tools', component: HomeComponent },
      { path: 'fl/building-tools/drill', component: HomeComponent },
      { path: 'fl/building-tools/shop-vac', component: HomeComponent },
      { path: 'fl/building-tools/grinder', component: HomeComponent },
      { path: 'fl/building-tools/nail-gun', component: HomeComponent },
      { path: 'fl/building-tools/saw', component: HomeComponent },
      { path: 'fl/building-tools/air-compressor', component: HomeComponent },
      { path: 'fl/building-tools/generator', component: HomeComponent },
      { path: 'fl/cacuum-cleaner', component: HomeComponent },
      { path: 'fl/camera', component: HomeComponent },
      { path: 'fl/coffee-maker', component: HomeComponent },
      { path: 'fl/computer', component: HomeComponent },
      { path: 'fl/drone', component: HomeComponent },
      { path: 'fl/fridge', component: HomeComponent },
      { path: 'fl/gaming-consoles', component: HomeComponent },
      { path: 'fl/headphones', component: HomeComponent },
      { path: 'fl/lawn-mower', component: HomeComponent },
      { path: 'fl/lens', component: HomeComponent },
      { path: 'fl/phone', component: HomeComponent },
      { path: 'fl/smartwatch', component: HomeComponent },
      { path: 'fl/tablets', component: HomeComponent },
      { path: 'fl/tv', component: HomeComponent },
      { path: 'fl/vr-headsets', component: HomeComponent },
      { path: 'fl/washing-machine', component: HomeComponent },
      { path: 'fl/real-estate', component: HomeComponent },
      { path: 'fl/apartment', component: HomeComponent },
      { path: 'fl/garage', component: HomeComponent },
      { path: 'fl/house', component: HomeComponent },
      { path: 'fl/house/largo', component: HomeComponent },
      { path: 'fl/land-lots', component: HomeComponent },
      { path: 'fl/restaurant-cafe', component: HomeComponent },
      { path: 'fl/townhouse', component: HomeComponent },
      { path: 'fl/warehouse-facilities', component: HomeComponent },
      {
        path: 'fl/car', component: HomeComponent, children: [
          { path: 'fl/bmw', component: HomeComponent },
          { path: 'fl/audi', component: HomeComponent },
          { path: 'fl/mercedes', component: HomeComponent },
          { path: 'fl/opel', component: HomeComponent },
          { path: 'fl/porshe', component: HomeComponent },
          { path: 'fl/smart', component: HomeComponent },
          { path: 'fl/volkswagen', component: HomeComponent }
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
