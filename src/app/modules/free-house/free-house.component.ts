import {Component, inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import emailjs from '@emailjs/browser';
import {MatSnackBar} from "@angular/material/snack-bar";
import {ConfirmAlertComponent} from "../../shared/components/confirm-alert/confirm-alert.component";
import {Subject, takeUntil} from "rxjs";
import {EasySteps} from "../easy-steps/shared/interfaces/easy-steps.interface";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-free-house',
  templateUrl: './free-house.component.html',
  styleUrl: './free-house.component.scss'
})
export class FreeHouseComponent implements OnInit {
  private destroy$: Subject<void> = new Subject<void>();

  private _snackBar = inject(MatSnackBar);

  durationInSeconds = 5;
  public freeHouse: any;

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

  constructor(
    private translate: TranslateService
  ) {
  }

  ngOnInit() {
   this.streamFreeHouseFromJson();
  }

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

  private streamFreeHouseFromJson() {
    this.translate.stream('free-house').pipe(takeUntil(this.destroy$))
      .subscribe((data: any) => {
        this.freeHouse = data;
      })
  }
}

