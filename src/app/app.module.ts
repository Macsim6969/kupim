import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { sidebarService } from "./shared/services/sidebar.service";
import { ShareModule } from "./shared/modules/share.module";
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ShareModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    })
  ],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync(),
    sidebarService
  ]
})

export class AppModule { }