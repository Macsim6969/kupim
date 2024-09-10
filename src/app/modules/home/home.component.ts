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
    this.store._activePage$.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      if (data) {
        this.isLoading = true;
        this.translate.stream(data).pipe(takeUntil(this.destroy$)).subscribe((data) => {

          timer(300).pipe(takeUntil(this.destroy$)).subscribe(() => {
            if (data) {
              this.checkImagesLoaded().then(() => {
                this.isLoading = false;
              }).catch(() => {
                this.isLoading = true;
              });
            }
          });
        });
      }
    });
  }

  private checkImagesLoaded(): Promise<void> {
    const images = Array.from(document.images);
    const imageLoadPromises = images.map((img) => {
      return new Promise<void>((resolve, reject) => {
        if (img.complete && img.naturalHeight !== 0) {

          resolve();
        } else {
          img.addEventListener('load', () => resolve());
          img.addEventListener('error', () => reject());
        }
      });
    });

    return Promise.all(imageLoadPromises).then(() => {
      // Все изображения успешно загружены
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
