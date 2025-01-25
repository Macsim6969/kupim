import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {DragScrollComponent} from 'ngx-drag-scroll';
import {TranslateService} from "@ngx-translate/core";
import {Subject, takeUntil} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public sliderData;

  constructor(
    private translate: TranslateService
  ) {
  }

  ngOnInit() {
    this.translate.stream('questions').pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.sliderData = data.slidersData
      })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
