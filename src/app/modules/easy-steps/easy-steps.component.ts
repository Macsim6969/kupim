import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { EasySteps } from './shared/interfaces/easy-steps.interface';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-easy-steps',
  templateUrl: './easy-steps.component.html',
  styleUrl: './easy-steps.component.scss'
})
export class EasyStepsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public easyStepData: EasySteps;
  public currentUrl: string;
  public form: FormGroup = new FormGroup({
    address: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  });

  constructor(
    private translate: TranslateService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.streamDataEasyStepsFromJson();
    this.currentUrl = this.router.url;
  }

  private streamDataEasyStepsFromJson() {
    this.translate.stream('easySteps').pipe(takeUntil(this.destroy$))
      .subscribe((data: EasySteps) => {
        this.easyStepData = data;
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
