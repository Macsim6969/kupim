import {Component, OnDestroy, OnInit} from '@angular/core';
import {AsyncPipe, NgIf} from "@angular/common";
import {MatFormField} from "@angular/material/form-field";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {Observable, Subject, takeUntil} from "rxjs";
import {Welcome} from "../../../welcome/shared/interfaces/welcome.interface";
import {TranslateService} from "@ngx-translate/core";
import {ActivatedRoute, Router} from "@angular/router";
import {sidebarService} from "../../../../shared/services/sidebar.service";

@Component({
  selector: 'app-quote-header',
  standalone: false,
  templateUrl: './quote-header.component.html',
  styleUrl: './quote-header.component.scss'
})
export class QuoteHeaderComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public isSidebar$: Observable<boolean>;
  private isOpenPopup: boolean;

  constructor(
    private sidebarService: sidebarService
  ) {
  }

  ngOnInit(): void {
    this.setUpObservableDate();
  }

  private setUpObservableDate() {
    this.isSidebar$ = this.sidebarService._isSidebarOpen$;
  }

  public openMenu() {
    this.isOpenPopup = !this.isOpenPopup;
    this.sidebarService._isSidebarOpen = this.isOpenPopup;
    document.body.style.overflow = this.isOpenPopup ? 'hidden' : '';
  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
