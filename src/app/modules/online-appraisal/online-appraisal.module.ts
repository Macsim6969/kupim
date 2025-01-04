import { NgModule } from '@angular/core';
import { ShareModule } from '../../shared/modules/share.module';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeModule } from '../welcome/welcome.module';
import { FooterModule } from '../footer/footer.module';
import { OnlineAppraisalComponent } from './online-appraisal.component';
import { OnlineComponent } from "./components/online/online.component";
import { AttentionComponent } from '../page-in-work/shared/attention/attention.component';

const routes: Routes = [{ path: '', component: OnlineAppraisalComponent }];

@NgModule({
  declarations: [OnlineAppraisalComponent,OnlineComponent, AttentionComponent],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(routes),
    WelcomeModule,
    FooterModule
],
  exports: [OnlineAppraisalComponent],
})
export class OnlineAppraisalModule {}
