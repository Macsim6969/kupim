import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter, Subject, take, takeUntil } from 'rxjs';
import { Location } from '@angular/common';

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
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const queryParams = { state: 'florida' };
    const urlTree = this.router.createUrlTree([], {
      relativeTo: this.route,
      queryParams: queryParams,
      queryParamsHandling: 'merge'
    });
    this.location.replaceState(this.router.serializeUrl(urlTree));
    this.streamRoute();
  }

  private streamRoute() {
    this.router.events.pipe(
      takeUntil(this.destroy$)
    ).subscribe((event) => {
      const url = event['routerEvent']?.url;
      if (url) {
        const language = this.routeLanguageMap[url.split('?')[0]];

        if (language) {
          this.translate.use(language);
        } else {
          this.router.navigate(['/'], { queryParamsHandling: 'merge' }).then();
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
