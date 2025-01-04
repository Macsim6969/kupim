import { NgModule } from '@angular/core';
import { ShareModule } from '../../shared/modules/share.module';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeModule } from '../welcome/welcome.module';
import { FooterModule } from '../footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogComponent } from './blog.component';
import { BlogsListComponent } from "./components/blogs-list/blogs-list.component";

const routes: Routes = [{ path: '', component: BlogComponent }];

@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(routes),
    WelcomeModule,
    FooterModule,
    BlogsListComponent
],
  exports: [BlogComponent],
})
export class BlogModule {}
