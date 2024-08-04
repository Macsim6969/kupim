import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { Questions } from './shared/interfaces/questions.interface';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public qustionsData: Questions;
  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.streamQuestionsDataFromJson();
  }

  private streamQuestionsDataFromJson() {
    this.translate.stream('questions').pipe(takeUntil(this.destroy$))
      .subscribe((data: Questions) => {
        this.qustionsData = data;
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
