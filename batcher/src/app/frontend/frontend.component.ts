import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.css']
})
export class FrontendComponent implements OnInit {
   studs= [
      {name:"Supriya",subject:"Html"},
      {name:"Aniket",subject:"Sass"},
    ];

     private userforms: boolean = true;
     private updateforms: boolean = false;
     private table: boolean = false;
    

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


          edit(){
          if(this.table==true){
          this.table = false;
          this.updateforms=true;
            }
          }
          
            update(){
            if(this.updateforms==true){
            this.updateforms = false;
            this.table = true;
            this.studs.push({name:"sarita",subject:"php"});
             }
            }
          
             delete(){
             this.studs.splice(0,1);
             }
          
        
        

             onSubmits(){
            console.log(this.updateform.value);
            alert("   Update Form Submited");
            }

      constructor(private fb:FormBuilder) { }

      ngOnInit() {}
    
  }  




