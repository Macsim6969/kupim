import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, take, takeUntil, timer } from 'rxjs';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { StoreService } from '../../shared/services/store.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public key: string[];
  public isLoading: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private translate: TranslateService,
    private cd: ChangeDetectorRef,
    private store: StoreService,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.checkToChangePage();
    this.setUpQueryParamsData();
    this.updatesMateTags();
  }

  ngAfterViewInit(): void {
    this.streamKeyDataFromJson();
    this.cd.detectChanges();
  }

  private checkToChangePage() {
    this.store._activePage$.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.isLoading = true;
      if (data) {
        this.translate
          .stream(data)
          .pipe(takeUntil(this.destroy$))
          .subscribe((translationData) => {
            if (translationData) {
              this.checkPageLoaded()
                .then(() => this.loadImages())
                .then(() => {
                  timer(150)
                    .pipe(take(1))
                    .subscribe(() => {
                      this.isLoading = false;
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                      });
                    });
                })
                .catch(() => {
                  this.isLoading = true;
                });
            }
          });
      }
    });
  }

  private loadImages(): Promise<void> {
    const images = Array.from(document.images) as HTMLImageElement[];
    const imagePromises = images.map((image) => {
      return new Promise<void>((resolve, reject) => {
        if (image.complete && image.naturalHeight !== 0) {
          resolve();
        } else {
          image.onload = () => resolve();
          image.onerror = () => reject();
        }
      });
    });

    return Promise.all(imagePromises).then(() => {});
  }

  private checkPageLoaded(): Promise<void> {
    return Promise.all([this.checkImagesLoaded(), this.waitForPageLoad()]).then(
      () => {}
    );
  }

  private checkImagesLoaded() {
    const images = Array.from(document.images);
    const imageLoadPromises = images.map((img) => {
      return new Promise<void>((resolve, reject) => {
        if (img.complete && img.naturalHeight !== 0) {
          resolve();
        } else {
          img.addEventListener('load', () => resolve());
          img.addEventListener('error', () =>
            reject(`Ошибка загрузки изображения: ${img.src}`)
          );
        }
      });
    });

    return Promise.all(imageLoadPromises)
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  }

  private waitForPageLoad(): Promise<void> {
    return new Promise<void>((resolve) => {
      if (document.readyState === 'complete') {
        resolve();
      } else {
        window.addEventListener('load', () => resolve());
      }
    });
  }

  private setUpQueryParamsData() {
    const queryParams = { state: 'florida' };
    const urlTree = this.router.createUrlTree([], {
      relativeTo: this.route,
      queryParams: queryParams,
      queryParamsHandling: 'merge',
    });
    this.location.replaceState(this.router.serializeUrl(urlTree));
  }

  private streamKeyDataFromJson() {
    this.translate
      .stream('key')
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: string[]) => {
        this.key = data || [];
      });
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
          { name: 'twitter:image', content: data.ogImage }
        ];
  
        // Если index=false, добавляем meta robots: noindex
        if (data.index === false) {
          metaTags.push({ name: 'robots', content: 'noindex' });
        }
  
        // Применяем новые мета-теги
        this.metaService.addTags(metaTags);
      }
    });
  }
  

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
