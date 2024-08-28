import { Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
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
  public isOpenTab: boolean[] = [];
  private isOpen: boolean;

  @ViewChildren('doppContent') public contents: QueryList<ElementRef>;
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

  openTab(id: number) {
    this.isOpen = !this.isOpen;
    this.isOpenTab = [];
    this.isOpenTab[id] = this.isOpen;
  }

  getContentMaxHeight(index: number): string {
    if (this.contents && this.contents.length > 0) {
      const contentElement = this.contents.toArray()[index]?.nativeElement;
      return contentElement ? contentElement.scrollHeight + 'px' : '0';
    }
    return '0';
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
