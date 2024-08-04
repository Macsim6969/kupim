import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { EasySteps } from './shared/interfaces/easy-steps.interface';

@Component({
  selector: 'app-easy-steps',
  templateUrl: './easy-steps.component.html',
  styleUrl: './easy-steps.component.scss'
})
export class EasyStepsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public easyStepData: EasySteps;
  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.streamDataEasyStepsFromJson();
  }

  private streamDataEasyStepsFromJson() {
    this.translate.stream('easySteps').pipe(takeUntil(this.destroy$))
      .subscribe((data: EasySteps) => {
        this.easyStepData = data;
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
