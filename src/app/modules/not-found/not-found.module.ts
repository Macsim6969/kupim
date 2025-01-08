import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./not-found.component";
import { CommonModule } from "@angular/common";
import { ShareModule } from "../../shared/modules/share.module";

const routes: Routes = [{
  path: '', component: NotFoundComponent
}]

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    NotFoundComponent
  ]
})

export class NotFoundModule {}