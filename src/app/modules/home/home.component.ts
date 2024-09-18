import { AfterViewInit, ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject, take, takeUntil, timer } from 'rxjs';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { StoreService } from '../../shared/services/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public key: string[];
  public isLoading: boolean;

  private previousUrl: string | null = null;
  private currentUrl: string | null = null;
  private scrollPositions: { [url: string]: number } = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private translate: TranslateService,
    private cd: ChangeDetectorRef,
    private store: StoreService
  ) { }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (window.scrollY !== 0 && this.currentUrl) {
      this.scrollPositions[this.currentUrl] = window.scrollY; // Сохраняем позицию скролла для текущего URL
    }
  }

  ngOnInit(): void {
    this.checkToChangePage();
    this.setUpQueryParamsData();
    
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const isBackNavigation = this.previousUrl === event.urlAfterRedirects;
        
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.urlAfterRedirects;

  
        if (isBackNavigation) {
          this.restoreScrollPosition(this.previousUrl); 
        }
      }
    });
  }

  private restoreScrollPosition(url: string | null): void {
    if (url && this.scrollPositions[url] !== undefined) {
      const savedScrollY = this.scrollPositions[url]; 

      timer(150).pipe(take(1)).subscribe(() => {
        this.isLoading = false;

        window.scrollTo({
          top: savedScrollY,  
          behavior: 'smooth'
        });
      });
    }
  }

  ngAfterViewInit(): void {
    this.streamKeyDataFromJson();
    this.cd.detectChanges();
  }

  private checkToChangePage() {
    this.store._activePage$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.isLoading = true;
        if (data) {
          this.translate.stream(data)
            .pipe(takeUntil(this.destroy$))
            .subscribe((translationData) => {
              if (translationData) {
                this.checkPageLoaded()
                  .then(() => this.loadImages())
                  .then(() => this.isLoading = false)
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
    const imagePromises = images.map(image => {
      return new Promise<void>((resolve, reject) => {
        if (image.complete && image.naturalHeight !== 0) {
          resolve();
        } else {
          image.onload = () => resolve();
          image.onerror = () => reject();
        }
      });
    });

    return Promise.all(imagePromises).then(() => { });
  }

  private checkPageLoaded(): Promise<void> {
    // Ждем загрузки всех изображений и самой страницы
    return Promise.all([this.checkImagesLoaded(), this.waitForPageLoad()])
      .then(() => {
      });
  }

  private checkImagesLoaded() {
    const images = Array.from(document.images);
    const imageLoadPromises = images.map((img) => {
      return new Promise<void>((resolve, reject) => {
        if (img.complete && img.naturalHeight !== 0) {
          resolve();
        } else {
          img.addEventListener('load', () => resolve());
          img.addEventListener('error', () => reject(`Ошибка загрузки изображения: ${img.src}`));
        }
      });
    });

    return Promise.all(imageLoadPromises)
      .then(() => {
      })
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
      queryParamsHandling: 'merge'
    });
    this.location.replaceState(this.router.serializeUrl(urlTree));
  }

  private streamKeyDataFromJson() {
    this.translate.stream('key').pipe(takeUntil(this.destroy$))
      .subscribe((data: string[]) => {
        this.key = data || [];

      });
  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
