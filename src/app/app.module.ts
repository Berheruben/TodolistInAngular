import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ApplicationModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { AppServicesService } from './app-services.service';
@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ApplicationModule,
    MatSliderModule,
    MatCardModule,
    FormsModule,
 
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [AppServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
