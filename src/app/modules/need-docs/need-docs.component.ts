import { Component, OnDestroy, OnInit } from '@angular/core';
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
