import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, take, takeUntil, timer } from 'rxjs';
import { ChoiceProductsInterface } from './shared/choiceProducts.interface';
import { Router } from '@angular/router';
import { StoreService } from '../../shared/services/store.service';

@Component({
  selector: 'app-choice-products',
  templateUrl: './choice-products.component.html',
  styleUrl: './choice-products.component.scss'
})
export class ChoiceProductsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public choiceProdData: ChoiceProductsInterface | string;
  public isPageRoute: string[] = ['gear', 'main', 'transport', 'electronics', 'real-estate'];
  public activePage: string;
  constructor(
    private translate: TranslateService,
    private router: Router,
    private store: StoreService
  ) { }

  ngOnInit(): void {
    this.streamChoiceProductsDataFromJson();
    this.streamStoreActivePage();
  }

  private streamChoiceProductsDataFromJson() {
    this.translate.stream('choiceProducts').pipe(takeUntil(this.destroy$))
      .subscribe((data: ChoiceProductsInterface) => {
        this.choiceProdData = data;
      })
  }

  private streamStoreActivePage() {
    this.store._activePage$.subscribe((data: string) => {
      this.activePage = data;
    });
  }

  public openPage(url: string) {
    this.router.navigate([url], { queryParamsHandling: 'merge' }).then(() => {
      timer(1000).pipe(take(1)).subscribe(() => {
        window.scrollTo({
          top: this.store._ScrollY$.getValue(),
          behavior: 'smooth'
        });
      })
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
