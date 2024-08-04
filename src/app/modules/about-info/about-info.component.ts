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
