import { Component, OnDestroy, OnInit } from '@angular/core';
import { SidebarServcie } from '../../shared/services/sidebar.service';
import { Subject, takeUntil } from 'rxjs';
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

  public welcomeDataPage: Welcome;
  public state: string
  constructor(
    private sidebarService: SidebarServcie,
    private translate: TranslateService,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.streamDashboardDataFromJson();
    this.route.queryParams.subscribe((data) => this.state = this.capitalizeFirstLetter(data['state']))
  }

  private streamDashboardDataFromJson() {
    this.translate.stream('dashboard').pipe(takeUntil(this.destroy$)).subscribe((data: Welcome) => {
      this.welcomeDataPage = data;
    })
  }

  private capitalizeFirstLetter(value: string): string {
    if (!value) return value;
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  public openSidebar() {
    this.sidebarService._isSidebarOpen = true;
  }

  ngOnDestroy(): void {

  }
}
