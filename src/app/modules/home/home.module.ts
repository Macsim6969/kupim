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

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'laptop', component: HomeComponent },
      { path: 'bike', component: HomeComponent },
      { path: 'motorbike', component: HomeComponent }
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
    ProdInfoModule,
    EasyStepsModule,
    NeedDocsModule,
    AboutInfoModule,
    InformationModule,
    FeedbackModule,
    QuestionsModule,
    FooterModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
