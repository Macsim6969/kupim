import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, take, takeUntil, timer } from 'rxjs';
import { ProdInfo } from './shared/interfaces/prodInfo.interface';
import { Router } from '@angular/router';
import { StoreService } from '../../shared/services/store.service';

@Component({
  selector: 'app-prod-info',
  templateUrl: './prod-info.component.html',
  styleUrl: './prod-info.component.scss'
})
export class ProdInfoComponent implements OnInit, AfterViewInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public prodInfo: ProdInfo | string;
  public activePage: string;
  public content: [{ img: string }];
  public isLoading: boolean;
  public isPageRoute: string[] = ['gear', 'main', 'transport', 'electronics', 'real-estate'];
  public version: string;

  constructor(
    private translate: TranslateService,
    private router: Router,
    private store: StoreService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getProdInfoDataFromJson();
    this.streamStoreActivePage();
    this.version = new Date().getTime().toString();
  }

  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }

  private streamStoreActivePage() {
    this.store._activePage$.subscribe((data: string) => {
      this.activePage = data;
    });
  }

  private getProdInfoDataFromJson() {
    this.translate.stream('prodInfo').pipe(takeUntil(this.destroy$))
      .subscribe((data: ProdInfo | string) => {
        if (data['content']) {
          this.content = data['content'];
          this.isLoading = false;
        } else {
          this.isLoading = true;
        }
        this.prodInfo = data;
      })
  }

  public openPage(route: string) {
    this.router.navigate([route], { queryParamsHandling: 'merge' }).then();


  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
