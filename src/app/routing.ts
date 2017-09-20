import  { NgModule } from '@angular/core';
import  { RouterModule } from '@angular/router';
import  { FeesComponent } from './fees/fees.component';
import  { CreatebatchComponent } from './createbatch/createbatch.component';
import  { LecturesComponent } from './lectures/lectures.component';
import { AdmissionComponent } from './admission/admission.component';
import { AdmisionreceiptComponent } from './admisionreceipt/admisionreceipt.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NewbatchComponent } from './newbatch/newbatch.component';
import { LecturerComponent } from './lecturer/lecturer.component';
import { CoursesComponent } from './courses/courses.component';



@NgModule({
    imports:[
    RouterModule.forRoot([
        { path:'',redirectTo:'/admission',pathMatch:"full" },
        { path:'admission',component:AdmissionComponent },
        { path: 'admireceipt',component:AdmisionreceiptComponent },
        { path:'create',component:CreatebatchComponent }, 
        { path:'fees',component:FeesComponent },
        { path:'lectures',component: LecturesComponent },
        { path:'feedback',component:FeedbackComponent },
        { path:'newbatch',component:NewbatchComponent },
        { path:'lecturer',component:LecturerComponent },
        { path:'course',  component: CoursesComponent }
        


    ]),

    ],

   exports:[
       RouterModule
       ]
  })
   
   export class RoutingModule{}
