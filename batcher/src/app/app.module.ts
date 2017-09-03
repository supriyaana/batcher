import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';
import { RoutingModule } from './routing';

import { AppComponent } from './app.component';
import { CreatebatchComponent } from './createbatch/createbatch.component';
import { FeesComponent } from './fees/fees.component';
import { LecturesComponent } from './lectures/lectures.component';
//import { UpdatelectComponent } from './updatelect/updatelect.component';
import { AdmissionComponent } from './admission/admission.component';
import { AdmisionreceiptComponent } from './admisionreceipt/admisionreceipt.component';
//import { StudsdataComponent } from './studsdata/studsdata.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FrontendComponent } from './frontend/frontend.component';
import { BackendComponent } from './backend/backend.component';
import { AndroidComponent } from './android/android.component';
import { IOSComponent } from './ios/ios.component';
import { UpdatelecComponent } from './updatelec/updatelec.component';
import { SupiComponent } from './supi/supi.component';
import { LectdetailsComponent } from './lectdetails/lectdetails.component';
//import { StuddetailComponent } from './studdetail/studdetail.component';


@NgModule({
  declarations: [
    AppComponent,
    CreatebatchComponent,
    FeesComponent,
    LecturesComponent,
   // UpdatelectComponent,
    AdmissionComponent,
    AdmisionreceiptComponent,
    //StudsdataComponent,
    FeedbackComponent,
    FrontendComponent,
    BackendComponent,
    AndroidComponent,
    IOSComponent,
    UpdatelecComponent,
    SupiComponent,
    LectdetailsComponent,
   // StuddetailComponent,

  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RoutingModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
