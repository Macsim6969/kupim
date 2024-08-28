import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { ProdInfo } from './shared/interfaces/prodInfo.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-info',
  templateUrl: './prod-info.component.html',
  styleUrl: './prod-info.component.scss'
})
export class ProdInfoComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public prodInfo: ProdInfo | string;

  constructor(
    private translate: TranslateService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProdInfoDataFromJson();
  }

  private getProdInfoDataFromJson() {
    this.translate.stream('prodInfo').pipe(takeUntil(this.destroy$))
      .subscribe((data: ProdInfo | string) => {
        if (data === 'prodInfo') {
          this.prodInfo = 'prodInfo';
        } else {
          this.prodInfo = data;
        }
      })
  }

  public openPage(route: string) {
    this.router.navigate([route], { queryParamsHandling: 'merge' }).then(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
