import { Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { NeedDocsArrayInterface, NeedDocsInterface } from './shared/interfaces/need-docs.interfaces';

@Component({
  selector: 'app-need-docs',
  templateUrl: './need-docs.component.html',
  styleUrl: './need-docs.component.scss'
})
export class NeedDocsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public needDocsData: NeedDocsInterface;
  public isOpenTab: boolean[] = [];

  @ViewChildren('doppContent') public contents: QueryList<ElementRef>;


  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.streamNeedDocsDataFromJson();
  }

  private streamNeedDocsDataFromJson() {
    this.translate.stream('need-docs').pipe(takeUntil(this.destroy$))
      .subscribe((data: NeedDocsInterface) => {
        this.needDocsData = data;
      })
  }

  public openTab(id: number) {
    if (this.isOpenTab[id] === undefined) {
      this.isOpenTab[id] = true;
    } else {
      this.isOpenTab[id] = !this.isOpenTab[id];
    }
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
