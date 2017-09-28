import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators }  from '@angular/forms';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses = [
    {name:"Angular2", subtitle:"Intro",description:"Angular is a framework for building client applications in HTML and either JavaScript or a language like TypeScript that compiles to JavaScript."},
   
  ];

      private userforms:boolean = true;
       private updateforms:boolean =  false;
       private table:boolean = false;
       selected:any;

    courseform = new FormGroup({
     course:new FormControl,
     subtitle:new FormControl,
     description:new FormControl
   });

    updateform = new FormGroup({
     name:new FormControl,
     subtitle:new FormControl,
     description:new FormControl
   });

   submit(){
     console.log(this.courseform.value);
     alert ("form submitted");
   }

      detail(){
      if(this.userforms==true){
        this.userforms = false;
        this.table=true;
      }
    }

    delete(){
          this.courses.splice(0,1);
          alert("Do You Want To delete");
        }


       edit(course){
         if(this.table==true){
           this.table = false;
           this.updateforms=true;
         }
         
         this.selected = course;
         alert("Do You Want To Edit");
          }

          update(){
          if(this.updateforms==true){
          this.updateforms = false;
          this.table = true;
            }
          }
          

           onSubmits(){
            console.log(this.updateform.value);
            alert("Update Form Submited");
          }


  constructor() { }

  ngOnInit() {
  }

}
