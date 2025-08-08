import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Subject, take, takeUntil, timer} from 'rxjs';
import { StoreService } from '../../shared/services/store.service';
import {Welcome} from "../welcome/shared/interfaces/welcome.interface";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public welcomeDataPage: Welcome;
  public state: string;
  public date: number = new Date().getFullYear();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.getQueryData();
    this.streamDashboardDataFromJson();
  }

  private getQueryData() {
    this.route.queryParams.pipe(take(1)).subscribe((data) => this.state = this.capitalizeFirstLetter(data['state']));
  }

  public openPage(url: string) {
    this.router.navigate([url], { queryParamsHandling: 'merge' }).then(() => {
      // timer(500).pipe(take(1)).subscribe(() => {
      //   window.scrollTo({
      //     top: this.store._OldScrollY,
      //     behavior: 'smooth'
      //   });
      // })
    });
  }

  public changeCountryPage(value: string): void {
    const selected = this.welcomeDataPage.arrayStates.find(s => s.value === value);
    if (selected) {
      this.router.navigate([selected.link]);
    }
  }

  private capitalizeFirstLetter(value: string): string {
    if (!value) return value;
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  private streamDashboardDataFromJson() {
    this.translate.stream('dashboard').pipe(takeUntil(this.destroy$)).subscribe((data: Welcome) => {
      this.welcomeDataPage = data;
    })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
