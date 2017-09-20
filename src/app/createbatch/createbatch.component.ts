import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from "@angular/forms";

@Component({
  selector: 'app-createbatch',
  templateUrl: './createbatch.component.html'
  
})
export class CreatebatchComponent implements OnInit {

  batches =[
    {name:"supriya",existingbatch:"D"},
    {name:"Sarita",existingbatch:"C"} 
  ];

  batchform = new FormGroup({
    name:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
    existing:new FormControl
  
  });

          private batchforms:boolean = true;
          private table:boolean = false;
          private selectedbatch:string;
          private updateforms:boolean;
  
  
          submit(){
          console.log(this.batchform.value);
          //alert("Form Submited");
        }
      
         detail(){
        if(this.batchforms==true){
        this.batchforms = false;
        this.table=true;
        }
      }
      
      delete(){
          this.batches.splice(0,1);
          alert("Do You Want To delete");
        }



  constructor() { }
   
  ngOnInit() {
  }

}
