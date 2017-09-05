import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-android',
  templateUrl: './android.component.html',
  styleUrls: ['./android.component.css']
})
export class AndroidComponent implements OnInit {
  studs = [
    {name:"Supriya",subject:"Android"},
    {name:"Sara",subject:"Android"}
  ];
  
       private userforms:boolean = true;
       private updateforms:boolean =  false;
       private table:boolean = false;
       private selectedandroid:string;   

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
      alert("   Update Form Submited");
    }

       edit(stud){
         if(this.table==true){
           this.table = false;
           this.updateforms=true;
         }
         this.selectedandroid = stud;
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
