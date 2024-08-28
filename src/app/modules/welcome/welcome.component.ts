import { Component, OnDestroy, OnInit } from '@angular/core';
import { sidebarService } from '../../shared/services/sidebar.service';
import { Observable, Subject, take, takeUntil } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Welcome } from './shared/interfaces/welcome.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public isSidebar$: Observable<boolean>;
  public welcomeDataPage: Welcome;
  public state: string
  private isOpenPopup: boolean;
  constructor(
    private sidebarService: sidebarService,
    private translate: TranslateService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.streamDashboardDataFromJson();
    this.getQueryData();
    this.setUpObservableDate();
  }

  private streamDashboardDataFromJson() {
    this.translate.stream('dashboard').pipe(takeUntil(this.destroy$)).subscribe((data: Welcome) => {
      this.welcomeDataPage = data;
    })
  }

  private getQueryData() {
    this.route.queryParams.pipe(take(1)).subscribe((data) => this.state = this.capitalizeFirstLetter(data['state']));
  }

  private setUpObservableDate() {
    this.isSidebar$ = this.sidebarService._isSidebarOpen$;
  }

  private capitalizeFirstLetter(value: string): string {
    if (!value) return value;
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  public useRoute(url) {
    this.router.navigate([url], { queryParamsHandling: 'merge', relativeTo: this.route }).then();
  }

  public openMenu() {
    this.isOpenPopup = !this.isOpenPopup;
    this.sidebarService._isSidebarOpen = this.isOpenPopup;
    document.body.style.overflow = 'hidden';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
