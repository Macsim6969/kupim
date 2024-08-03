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
      if (event['routerEvent'].url === '/') {
        this.translate.use('main');
      } else if (event['routerEvent'].url === '/bike') {
        this.translate.use('bike');
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
