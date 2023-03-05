import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DisplayCitizenComponent} from "./display-citizen/display-citizen.component";
import {CreatCitizenComponent} from "./creat-citizen/creat-citizen.component";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatGridListModule} from "@angular/material/grid-list";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {QRCodeModule} from "angularx-qrcode";

@NgModule({
  declarations: [
    AppComponent,  CreatCitizenComponent,
    DisplayCitizenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, MatCardModule, MatGridListModule, FormsModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
    BrowserAnimationsModule, MatIconModule, MatSelectModule, ReactiveFormsModule,QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
