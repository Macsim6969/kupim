import { ShareModule } from './../../shared/modules/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeModule } from "../welcome/welcome.module";
import { TeamInfoComponent } from './shared/components/team-info/team-info.component';
import { FooterModule } from "../footer/footer.module";

const routes: Routes = [
  { path: '', component: TeamComponent }
]

@NgModule({
  declarations: [
    TeamComponent,
    TeamInfoComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(routes),
    WelcomeModule,
    FooterModule
]
})
export class TeamModule { }
