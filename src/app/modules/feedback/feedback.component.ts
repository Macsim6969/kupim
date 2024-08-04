import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { TestimonialsInterface } from './shared/interfaces/feedback.interface';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public testimonialsData: TestimonialsInterface;

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.streamFeeadbackDataFromJson();
  }

  private streamFeeadbackDataFromJson() {
    this.translate.stream('testimonials').pipe(takeUntil(this.destroy$))
      .subscribe((data: TestimonialsInterface) => {
        this.testimonialsData = data;
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
