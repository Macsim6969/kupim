import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { EasySteps } from './shared/interfaces/easy-steps.interface';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import emailjs from "@emailjs/browser";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ConfirmAlertComponent} from "../../shared/components/confirm-alert/confirm-alert.component";

@Component({
  selector: 'app-easy-steps',
  templateUrl: './easy-steps.component.html',
  styleUrl: './easy-steps.component.scss'
})
export class EasyStepsComponent implements OnInit, OnDestroy {
  private _snackBar = inject(MatSnackBar);

  durationInSeconds = 5;

  private destroy$: Subject<void> = new Subject<void>();
  public easyStepData: EasySteps | any;
  public currentUrl: string;
  public form: FormGroup = new FormGroup({
    address: new FormControl('', [Validators.required, Validators.minLength(5)]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]{9,15}$/) // от 9 до 15 цифр
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ])
  });

  public sendMessage(): void {
    if (this.form.invalid) return;

    const formData = this.form.value;

    emailjs
      .send(
        'service_bnzz52i',
        'template_rkqbvjo',
        {
          address: formData.address,
          phone: formData.phone,
          email: formData.email
        },
        'tvpmVlPHpSk06ISCA'
      )
      .then(
        () => {
          this._snackBar.openFromComponent(ConfirmAlertComponent, {
            duration: this.durationInSeconds * 1000,
          });
          this.form.reset();
        },
        (error) => {
          console.error('Failed to send email:', error);
          alert('Something went wrong.');
        }
      );
  }

  public get address() {
    return this.form.get('address');
  }

  public get phone() {
    return this.form.get('phone');
  }

  public get email() {
    return this.form.get('email');
  }

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
