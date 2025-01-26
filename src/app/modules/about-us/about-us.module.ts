import {NgModule} from "@angular/core";
import {WelcomeModule} from "../welcome/welcome.module";
import {ShareModule} from "../../shared/modules/share.module";
import {RouterModule, Routes} from "@angular/router";
import {AboutUsComponent} from "./about-us.component";
import {FooterModule} from "../footer/footer.module";

const routes: Routes = [
  { path: '', component: AboutUsComponent}
]

@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    WelcomeModule,
    FooterModule,
    ShareModule,
    RouterModule.forChild(routes)
  ],
  exports: [AboutUsComponent]
})


export class AboutUsModule { }
