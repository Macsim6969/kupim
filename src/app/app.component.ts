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
        this.titleService.setTitle(data.metaTitle);

        const tagNames = [
          'description',
          'og:title',
          'og:description',
          'og:image',
          'og:url',
          'twitter:title',
          'twitter:description',
          'twitter:image',
          'robots'
        ];
        tagNames.forEach((tagName) => {
          this.metaService.removeTag(`name='${tagName}'`);
          this.metaService.removeTag(`property='${tagName}'`);
        });

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

         metaTags.forEach(tag => {
          const selector = tag.name
            ? `name="${tag.name}"`
            : `property="${tag.property}"`;
          this.metaService.addTag(tag, true);
        });

        this.updateCanonicalLink(data.ogUrl || location.href);
        this.updateJsonLd(data);
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
          this.translate.use('main');
          this.store._activePage = 'main';
        }
      }
    });
  }

  private setObservableData() {
    this.isOpenSidebar$ = this.sidebarService._isSidebarOpen$;
  }



  private updateJsonLd(data: any) {
    if (!data) return;

    const jsonLdData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": data.ogUrl || "https://buddy-cash.com/fl",
      "name": data.ogTitle || "Sell used items - Miami, Tampa, Orlando, Jacksonville, Fl - Buddy Cash",
      "description": data.ogDescription || "Professional asset purchase services: Buy, sell, and trade vehicles, electronics, real estate, and furniture. Get money today. Free online valuation in 10 minutes.",
      "image": data.ogImage || "https://firebasestorage.googleapis.com/v0/b/lcii-cd674.appspot.com/o/images%2FSell_used_item.png?alt=media&token=5d2aeacd-b8d3-4e9c-92a5-3a389041d7d4",
      "url": data.ogUrl || "https://buddy-cash.com/fl",
      "sameAs": [
        "http://m.me/buddycash01",
        "https://t.me/buddy_cashFL",
        "https://www.instagram.com/buddycash.fl?igsh=ajExazF2MjJkM3cz"
      ],
      "telephone": "+17275091449",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "55 NE 5th St",
        "addressLocality": "St. Petersburg",
        "addressRegion": "FL",
        "postalCode": "33132",
        "addressCountry": "US"
      },
      "openingHours": "Mo-Su 09:00 AM - 07:00 PM"
    };

    const existingScript = this.document.head.querySelector("script[type='application/ld+json']");
    if (existingScript) {
      this.document.head.removeChild(existingScript);
    }

    const script = this.document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(jsonLdData);

    this.document.head.appendChild(script);
  }


}
