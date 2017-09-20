import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RoutingModule } from './routing';

import { AppComponent } from './app.component';
import { CreatebatchComponent } from './createbatch/createbatch.component';
import { FeesComponent } from './fees/fees.component';
import { LecturesComponent } from './lectures/lectures.component';
import { AdmissionComponent } from './admission/admission.component';
import { AdmisionreceiptComponent } from './admisionreceipt/admisionreceipt.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SelectModule } from 'angular2-select';
import { NewbatchComponent } from './newbatch/newbatch.component';
import { LecturerComponent } from './lecturer/lecturer.component';
import { CoursesComponent } from './courses/courses.component';


@NgModule({
  declarations: [
    AppComponent,
    CreatebatchComponent,
    FeesComponent,
    LecturesComponent,
    AdmissionComponent,
    AdmisionreceiptComponent,
    FeedbackComponent,
    NewbatchComponent,
    LecturerComponent,
    CoursesComponent,

  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
