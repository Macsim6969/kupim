import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  private routeLanguageMap = {
    '/': 'main',
    '/bike': 'bike',
    '/laptop': 'laptop'
  };
  constructor(
    private translate: TranslateService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.streamRoute();
  }

  private streamRoute() {
    this.router.events.pipe(
      takeUntil(this.destroy$)
    ).subscribe((event: NavigationEnd) => {
      const language = this.routeLanguageMap[event['routerEvent'].url] || 'main';
      this.translate.use(language);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
