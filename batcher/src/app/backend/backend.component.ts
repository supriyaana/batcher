import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent implements OnInit {
 studs= [
        {name:"Rohit",subject:"Java"},
        {name:"Aniket",subject:"Php"},
    ];

       private userforms:boolean = true;
       private updateforms:boolean =  false;
       private table:boolean = false;   

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
         }
          }
           
        delete(){
          this.studs.splice(0,1);
        }

      


      constructor() {
       }

  ngOnInit() {
  }

}
