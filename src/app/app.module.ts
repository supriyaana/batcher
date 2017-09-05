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
import { FrontendComponent } from './frontend/frontend.component';
import { BackendComponent } from './backend/backend.component';
import { AndroidComponent } from './android/android.component';
import { IOSComponent } from './ios/ios.component';


@NgModule({
  declarations: [
    AppComponent,
    CreatebatchComponent,
    FeesComponent,
    LecturesComponent,
    AdmissionComponent,
    AdmisionreceiptComponent,
    FeedbackComponent,
    FrontendComponent,
    BackendComponent,
    AndroidComponent,
    IOSComponent,

  
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
