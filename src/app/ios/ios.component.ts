import { Component, OnInit } from '@angular/core';
import  { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-ios',
  templateUrl: './ios.component.html',
  styleUrls: ['./ios.component.css']
})
export class IOSComponent implements OnInit {

   studs= [
      {name:"Sohail",subject:"IOS"},
      {name:"Nabil",subject:"IOS"},
    ];


      private userforms:boolean = true;
      private updateforms:boolean =  false;
      private table:boolean = false; 
      private selectedios:string;  

     userform = new FormGroup({
      name:new FormControl,
      subject:new FormControl
      })  

    updateform = new FormGroup({
      name:new FormControl,
      subject:new FormControl
      })
  

    onSubmit(){
      if(this.userforms==true){
        this.userforms = false;
        this.table=true;
        console.log(this.userform.value);
        //alert(" Form Submited");
      }
    }

    onSubmits(){
      console.log(this.updateform.value);
      alert("Update Form Submited");
    }

       edit(stud){
         if(this.table==true){
           this.table = false;
           this.updateforms=true;
         }
         this.selectedios = stud;
       }

       update(){
         if(this.updateforms==true){
           this.updateforms = false;
           this.table = true;
         }
          }
           
        delete(){
          this.studs.splice(0,1);
        }

      constructor() { }

      ngOnInit() {
    
      }
  

  
}


