import { Component, OnInit } from '@angular/core';
import { sidebarService } from './shared/services/sidebar.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { StoreService } from './shared/services/store.service';
import { RoutePageService } from './shared/services/routePage.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  public isOpenSidebar$: Observable<boolean>;

  constructor(
    private sidebarService: sidebarService,
    private router: Router,
    private translate: TranslateService,
    private store: StoreService,
    private routePage: RoutePageService,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {
    this.setObservableData();
    this.streamRoute();
    this.updatesMateTags();
  }

  private streamRoute() {
    this.router.events.subscribe((event) => {
      const url = event['routerEvent']?.url;
      if (url) {
        const language = this.routePage._routeLanguageMap[url.split('?')[0]];

        if (language) {
          this.translate.use(language);
          this.store._activePage = language;
        } else {
          this.router.navigate(['/'], { queryParamsHandling: 'merge' }).then();
          this.translate.use('main');
          this.store._activePage = 'main';
        }
      }
    });
  }

  private setObservableData() {
    this.isOpenSidebar$ = this.sidebarService._isSidebarOpen$;
  }

  private updatesMateTags() {
    this.translate.stream('dashboard').subscribe((data) => {
      this.titleService.setTitle(data.ogTitle);
      this.metaService.addTags([
        { name: 'description', content: data.description },
        { name: 'keywords', content: data.keywords },
        { property: 'og:title', content: data.ogTitle },
        { property: 'og:description', content: data.ogDescription },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: data.ogUrl },
        { property: 'og:image', content: data.ogImage }
      ]);
    })
  }
}
