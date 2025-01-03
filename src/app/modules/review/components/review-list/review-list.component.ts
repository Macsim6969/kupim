import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReviewService } from '../../services/review.service';
import { map, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { Review } from '../../models/review.interface';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrl: './review-list.component.scss',
})
export class ReviewListComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public reviewList: Review[];

  constructor(private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.streamReviewData();
  }

  private streamReviewData(): void {
    this.reviewService
      .getReviewData()
      .pipe(
        takeUntil(this.destroy$),
        map((data: Review[]) => {
          return Object.values(data).map((review) => ({
            ...review,
            counterArray: Array(review.countStars).fill(0), 
          }));
        })
      )
      .subscribe((data: Review[]) => {
        this.reviewList = data;
      });
  }
  

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
