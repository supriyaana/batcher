import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from "@angular/forms";

@Component({
  selector: 'app-createbatch',
  templateUrl: './createbatch.component.html'
  
})
export class CreatebatchComponent implements OnInit {
  userform = new FormGroup({
    name:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
    sub:new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
   // division:new FormControl("",[Validators.required,Validators.minLength(1),Validators.maxLength(2)])

  });
  
  
  onSubmit(){
    console.log(this.userform.value);
    alert("Form Submited");
  }

  constructor() { }
   
  ngOnInit() {
  }

}
