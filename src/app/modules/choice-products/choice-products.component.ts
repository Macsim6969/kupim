import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { ChoiceProductsInterface } from './shared/choiceProducts.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choice-products',
  templateUrl: './choice-products.component.html',
  styleUrl: './choice-products.component.scss'
})
export class ChoiceProductsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public choiceProdData: ChoiceProductsInterface | string;
  constructor(
    private translate: TranslateService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.streamChoiceProductsDataFromJson();
  }

  private streamChoiceProductsDataFromJson() {
    this.translate.stream('choiceProducts').pipe(takeUntil(this.destroy$))
      .subscribe((data: ChoiceProductsInterface) => {
        this.choiceProdData = data;
      })
  }

  public openPage(url: string) {
    this.router.navigate([url], { queryParamsHandling: 'merge' }).then(() => {
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
