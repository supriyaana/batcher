import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.css']
})
export class FrontendComponent implements OnInit {
   studs= [
      {id:1,name:"Supriya",subject:"Html"},
      {id:2,name:"Aniket",subject:"Sass"},
    ];

     private userforms: boolean = true;
     private updateforms: boolean = false;
     private table: boolean = false;
     private selectedfrontend:string;
    

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
           alert(" Form Submited");
          }
          }


          edit(stud){
          if(this.table==true){
          this.table = false;
          this.updateforms=true;
            }
            this.selectedfrontend = stud;
          }
          
            update(){
            if(this.updateforms==true){
            this.updateforms = false;
            this.table = true;
            //this.studs.push({name:"sarita",subject:"php"});
             }
            }
          
             delete(){
             this.studs.splice(0,1);
             }
          
             onSubmits(){
            console.log(this.updateform.value);
            alert("   Update Form Submited");
            }

           constructor() { }

           ngOnInit() {}
    
  }  




