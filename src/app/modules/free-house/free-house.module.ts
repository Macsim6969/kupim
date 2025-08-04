import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FreeHouseComponent} from "./free-house.component";
import {ShareModule} from "../../shared/modules/share.module";
import {RouterLink} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    FreeHouseComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [FreeHouseComponent]
})
export class FreeHouseModule { }
