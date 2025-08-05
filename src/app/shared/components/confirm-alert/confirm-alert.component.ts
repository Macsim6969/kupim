import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarAction, MatSnackBarActions, MatSnackBarLabel} from "@angular/material/snack-bar";

@Component({
  selector: 'app-confirm-alert',
  standalone: true,
  imports: [MatButtonModule, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction],
  templateUrl: './confirm-alert.component.html',
  styleUrl: './confirm-alert.component.scss'
})
export class ConfirmAlertComponent {

}
