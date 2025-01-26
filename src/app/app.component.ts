import {Component, Inject, OnInit} from '@angular/core';
import { sidebarService } from './shared/services/sidebar.service';
import {filter, Observable} from 'rxjs';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { StoreService } from './shared/services/store.service';
import { RoutePageService } from './shared/services/routePage.service';
import { Meta, Title } from '@angular/platform-browser';
import {DOCUMENT} from "@angular/common";

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
    @Inject(DOCUMENT) private document: Document,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {
    this.setObservableData();
    this.streamRoute();
    this.updatesMateTags();
  }

  private updatesMateTags() {
    this.translate.stream('dashboard').subscribe((data) => {
      if (data) {
        // Обновляем заголовок страницы
        this.titleService.setTitle(data.metaTitle);

        // Удаляем старые мета-теги
        const tagNames = [
          'description',
          'og:title',
          'og:description',
          'og:image',
          'og:url',
          'twitter:title',
          'twitter:description',
          'twitter:image',
          'robots' // Удаляем robots, чтобы избежать дублирования
        ];
        tagNames.forEach((tagName) => {
          this.metaService.removeTag(`name='${tagName}'`);
          this.metaService.removeTag(`property='${tagName}'`);
        });

        // Добавляем мета-теги
        const metaTags = [
          { name: 'description', content: data.description },
          { property: 'og:title', content: data.ogTitle },
          { property: 'og:description', content: data.ogDescription },
          { property: 'og:image', content: data.ogImage },
          { property: 'og:url', content: data.ogUrl },
          { property: 'og:type', content: 'website' },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: data.ogTitle },
          { name: 'twitter:description', content: data.ogDescription },
          { name: 'twitter:image', content: data.ogImage },
        ].filter(Boolean);

        if (data.index === false) {
          metaTags.push({ name: 'robots', content: 'noindex' });
        }

        // Добавляем мета-теги с использованием addTag, чтобы они были выше в <head>
        metaTags.forEach(tag => {
          const selector = tag.name
            ? `name="${tag.name}"`
            : `property="${tag.property}"`;
          this.metaService.addTag(tag, true);
        });

        // Обновление канонической ссылки
        this.updateCanonicalLink(data.ogUrl || location.href);

      }
    });
  }


  private updateCanonicalLink(canonicalUrl: string): void {
    // Удаляем существующий canonical link
    let link: HTMLLinkElement | null = this.document.head.querySelector("link[rel='canonical']");
    if (link) {
      this.document.head.removeChild(link);
    }

    // Добавляем новый canonical link
    link = this.document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', canonicalUrl);
    this.document.head.appendChild(link);
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

}
