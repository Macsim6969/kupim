import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AboutInfo, AboutList } from './shared/interfaces/about-info.interface';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-about-info',
  templateUrl: './about-info.component.html',
  styleUrl: './about-info.component.scss'
})
export class AboutInfoComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public aboutInfoData: AboutList[];
  public aboutTitle: string;
  public aboutText: string;

  public readonly icons : string[] = [
    '/assets/img/laptop/about/car.webp',
    '/assets/img/laptop/about/sack.webp',
    '/assets/img/laptop/about/lock.webp',
    '/assets/img/laptop/about/back.webp',
    '/assets/img/laptop/about/time.webp',
    '/assets/img/laptop/about/thumb-up.webp',
    '/assets/img/laptop/about/flag.webp',
    '/assets/img/laptop/about/bills.webp',
    '/assets/img/laptop/about/chain.webp',

  ]

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.streamAboutInfoDataFromJson();
  }

  private streamAboutInfoDataFromJson() {
    this.translate.stream('aboutInfo').subscribe((data: AboutInfo) => {
      this.aboutInfoData = data.list;
      this.aboutTitle = data.title;
      this.aboutText = data.text;
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
