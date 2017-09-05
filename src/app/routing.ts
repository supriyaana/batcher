import  { NgModule } from '@angular/core';
import  { RouterModule } from '@angular/router';
import  { FeesComponent } from './fees/fees.component';
import  { CreatebatchComponent } from './createbatch/createbatch.component';
import  { LecturesComponent } from './lectures/lectures.component';
import { AdmissionComponent } from './admission/admission.component';
import { AdmisionreceiptComponent } from './admisionreceipt/admisionreceipt.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FrontendComponent } from './frontend/frontend.component';
import { BackendComponent } from './backend/backend.component';
import { AndroidComponent } from './android/android.component';
import { IOSComponent } from './ios/ios.component';

@NgModule({
    imports:[
    RouterModule.forRoot([
        { path:'',redirectTo:'/admission',pathMatch:"full" },
        { path:'admission',component:AdmissionComponent },
        { path: 'admireceipt',component:AdmisionreceiptComponent },
        { path:'create',component:CreatebatchComponent },
        { path:'frontend',component:FrontendComponent },
        { path:'backend',component:BackendComponent },
        { path:'android',component:AndroidComponent },
        { path:'ios',component:IOSComponent },  
        { path:'fees',component:FeesComponent },
        { path:'lectures',component: LecturesComponent },
        { path:'feedback',component:FeedbackComponent }


    ]),

    ],

   exports:[
       RouterModule
       ]
  })
   
   export class RoutingModule{}
