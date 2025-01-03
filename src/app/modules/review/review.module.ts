import { NgModule } from '@angular/core';
import { ShareModule } from '../../shared/modules/share.module';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReviewComponent } from './review.component';
import { WelcomeModule } from '../welcome/welcome.module';
import { FooterModule } from '../footer/footer.module';
import { ReviewFormComponent } from './components/review-form/review-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReviewService } from './services/review.service';
import { ReviewListComponent } from './components/review-list/review-list.component';

const routes: Routes = [{ path: '', component: ReviewComponent }];

@NgModule({
  declarations: [ReviewComponent, ReviewFormComponent, ReviewListComponent],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(routes),
    WelcomeModule,
    FormsModule,
    ReactiveFormsModule,
    FooterModule,
  ],
  providers: [ReviewService],
  exports: [ReviewComponent],
})
export class ReviewModule {}
