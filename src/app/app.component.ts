import { Component, OnInit } from '@angular/core';
import { sidebarService } from './shared/services/sidebar.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { StoreService } from './shared/services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private routeLanguageMap = {
    '/': 'main',
    '/transport': 'transport',
    '/bike': 'bike',
    '/laptop': 'laptop',
    '/contacts': 'contacts',
    '/team': 'team',
    '/motorbike': 'motorbike',
    '/kick_skooter': 'kick_skooter',
    '/boat': 'boat',
    '/tractor': 'tractor',
    '/trailer': 'trailer',
    '/car': 'car',
    '/car/bmw': 'bmw',
    '/car/audi': 'audi',
    '/car/mercedes': 'mercedes',
    '/car/opel': 'opel',
    '/car/porshe': 'porshe',
    '/car/smart': 'smart',
    '/car/volkswagen': 'volkswagen',
    '/legal-information': 'legal_info'
  };
  public isOpenSidebar$: Observable<boolean>;

  constructor(
    private sidebarService: sidebarService,
    private router: Router,
    private translate: TranslateService,
    private store: StoreService
  ) { }

  ngOnInit(): void {
    this.setObservableData();
    this.streamRoute();

  }

  private streamRoute() {
    this.router.events.subscribe((event) => {
      const url = event['routerEvent']?.url;
      if (url) {
        const language = this.routeLanguageMap[url.split('?')[0]];

        if (language) {
          this.translate.use(language);
          this.store._activePage = language;
        } else {
          this.router.navigate(['/'], { queryParamsHandling: 'merge' }).then();
          this.translate.use('main');
          this.store._activePage = 'main';
        }
      }
    });
  }

  private setObservableData() {
    this.isOpenSidebar$ = this.sidebarService._isSidebarOpen$;
  }
}
