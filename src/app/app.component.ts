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

        // Применяем новые мета-теги
        metaTags.forEach(tag => {
          this.metaService.updateTag(tag);
        });

        this.updateCanonicalLink(data.ogUrl || location.href);
        // Добавляем JSON-LD
        this.addJsonLdScript(data);
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

  private addJsonLdScript(data: any): void {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": data.ogTitle,
      "image": data.ogImage || "https://firebasestorage.googleapis.com/v0/b/lcii-cd674.appspot.com/o/images%2FSell_used_item.png?alt=media&token=5d2aeacd-b8d3-4e9c-92a5-3a389041d7d4", // Замените на дефолтный URL, если данных нет
      "description": data.description || "Buy, sell, or trade items in Florida. Best deals and fast cash. Join today!", // Замените на дефолтное значение
      "brand": {
        "@type": "Brand",
        "name": "Buddy Cash"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": data.priceCurrency || "USD",
        "price": data.price || "10.00", // Замените на дефолтное значение
        "itemCondition": "https://schema.org/UsedCondition",
        "availability": "https://schema.org/InStock"
      }
    };

    this.replaceJsonLd(jsonLd);
  }

  private replaceJsonLd(jsonLd: object): void {
    // Удаляем предыдущий JSON-LD
    const existingScript = this.document.head.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      this.document.head.removeChild(existingScript);
    }

    // Добавляем новый JSON-LD
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jsonLd);
    this.document.head.appendChild(script);
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
