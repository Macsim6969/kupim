import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private translate: TranslateService,
    private cd: ChangeDetectorRef,
    private store: StoreService
  ) { }

  ngOnInit(): void {
    this.checkToChangePage();
    this.setUpQueryParamsData();
  }

  ngAfterViewInit(): void {
    this.streamKeyDataFromJson();
    this.cd.detectChanges();
  }

  private checkToChangePage() {
    this.store._activePage$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        if (data) {
          this.isLoading = true;
          this.translate.stream(data)
            .pipe(takeUntil(this.destroy$))
            .subscribe((translationData) => {

              timer(300)
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                  if (translationData) {
                    this.checkPageLoaded()
                      .then(() => {
                        this.isLoading = false;
                      })
                      .catch(() => {
                        // При ошибке сохраняем загрузочный индикатор
                        this.isLoading = true;
                      });
                  }
                });
            });
        }
      });
  }

  private checkPageLoaded(): Promise<void> {
    // Ждем загрузки всех изображений и самой страницы
    return Promise.all([this.checkImagesLoaded(), this.waitForPageLoad()])
      .then(() => {
        console.log('Страница полностью загружена');
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
        console.log('Все изображения загружены');
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
