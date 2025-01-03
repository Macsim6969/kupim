import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReviewService } from '../../services/review.service';
import { Subject, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.scss',
})
export class ReviewFormComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public form: FormGroup;

  public stars = Array(5);
  public hoveredIndex: number = -1;
  public selectedIndex: number = -1;
  public confirmeText = 'Your review will be published on our website soon';
  public isConfirmed = true;

  constructor(private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.form = new FormGroup({
      message: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      countStars: new FormControl(0, [Validators.required]),
    });
  }

  public sendData(): void {
    this.isConfirmed = false;
    this.reviewService
      .sendReviewData(this.form.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe();
    this.selectedIndex = -1;
    this.hoveredIndex = -1;
    this.form.reset();

    timer(1500).subscribe(() =>{
      this.isConfirmed = true;
    })
  }

  public setHoveredIndex(index: number): void {
    this.hoveredIndex = index;
  }

  public resetHoveredIndex(): void {
    this.hoveredIndex = -1;
  }

  public setSelectedIndex(index: number): void {
    this.selectedIndex = index;
    this.form.get('countStars').setValue(index);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
