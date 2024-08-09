import { Component, OnInit } from '@angular/core';
import { sidebarService } from './shared/services/sidebar.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  private routeLanguageMap = {
    '/': 'main',
    '/bike': 'bike',
    '/laptop': 'laptop',
    '/contacts': 'contacts',
    '/team': 'team',
    '/motorbike': 'motorbike',
    '/kick_skooter': 'kick_skooter',
    '/boat': 'boat',
    '/tractor': 'tractor'
  };
  public isOpenSidebar$: Observable<boolean>;

  constructor(
    private sidebarService: sidebarService,
    private router: Router,
    private translate: TranslateService
  ){}

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
        } else {
          this.router.navigate(['/'], { queryParamsHandling: 'merge' }).then();
          this.translate.use('main');
        }
      }
    });
  }

  private setObservableData(){
    this.isOpenSidebar$ = this.sidebarService._isSidebarOpen$;
  }
}
