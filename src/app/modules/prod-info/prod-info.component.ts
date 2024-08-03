import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { ProdInfo } from './shared/interfaces/prodInfo.interface';

@Component({
  selector: 'app-prod-info',
  templateUrl: './prod-info.component.html',
  styleUrl: './prod-info.component.scss'
})
export class ProdInfoComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public prodInfo: ProdInfo;

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.getProdInfoDataFromJson();
  }

  private getProdInfoDataFromJson() {
    this.translate.stream('prodInfo').pipe(takeUntil(this.destroy$))
      .subscribe((data: ProdInfo) => {
        this.prodInfo = data;
      })
  }

  ngOnDestroy(): void {

  }

}
