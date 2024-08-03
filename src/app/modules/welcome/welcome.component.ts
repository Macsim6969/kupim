import { Component, OnDestroy, OnInit } from '@angular/core';
import { SidebarServcie } from '../../shared/services/sidebar.service';
import { Subject, takeUntil } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Welcome } from './shared/interfaces/welcome.interface';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  public welcomeDataPage: Welcome;
  constructor(
    private sidebarService: SidebarServcie,
    private translate: TranslateService
  ) { }
  ngOnInit(): void {
    this.streamDashboardDataFromJson();
  }

  private streamDashboardDataFromJson() {
    this.translate.stream('dashboard').pipe(takeUntil(this.destroy$)).subscribe((data: Welcome) => {
      this.welcomeDataPage = data;
    })
  }

  public openSidebar() {
    this.sidebarService._isSidebarOpen = true;
  }

  ngOnDestroy(): void {

  }
}
