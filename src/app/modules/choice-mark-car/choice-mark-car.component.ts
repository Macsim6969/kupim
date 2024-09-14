import { MarkCarInterface } from './shared/mark-car.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subject, take, takeUntil, timer } from 'rxjs';
import { StoreService } from '../../shared/services/store.service';

@Component({
  selector: 'app-choice-mark-car',
  templateUrl: './choice-mark-car.component.html',
  styleUrl: './choice-mark-car.component.scss'
})
export class ChoiceMarkCarComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public markCarsData: MarkCarInterface | string;

  constructor(
    private translate: TranslateService,
    private router: Router,
    private store: StoreService
  ) { }

  ngOnInit(): void {
    this.streamChoiceMarkDataFromJson();
  }

  private streamChoiceMarkDataFromJson() {
    this.translate.stream('choiceMarkCar').pipe(takeUntil(this.destroy$))
      .subscribe((data: MarkCarInterface | string) => {
        this.markCarsData = data;
      })
  }

  public openPage(url: string) {
    this.router.navigate([url], { queryParamsHandling: 'merge' }).then(() => {
      // timer(500).pipe(take(1)).subscribe(() => {
      //   window.scrollTo({
      //     top: this.store._OldScrollY,
      //     behavior: 'smooth'
      //   });
      // })
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
