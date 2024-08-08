import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public key: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private translate: TranslateService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.setUpQueryParamsData();
  }

  ngAfterViewInit(): void {
    this.streamKeyDataFromJson();
    this.cd.detectChanges();

  }

  private setUpQueryParamsData() {
    const queryParams = { state: 'florida' };
    const urlTree = this.router.createUrlTree([], {
      relativeTo: this.route,
      queryParams: queryParams,
      queryParamsHandling: 'merge'
    });
    this.location.replaceState(this.router.serializeUrl(urlTree));
  }

  private streamKeyDataFromJson() {
    this.translate.stream('key').pipe(takeUntil(this.destroy$))
      .subscribe((data: string) => {
        this.key = data || '';
        console.log(this.key)
      });
  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
