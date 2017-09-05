import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  userform =  new FormGroup({
    email: new FormControl ('',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
    message: new FormControl 
  }); 

  
  constructor() { }

  onSubmit(){
    console.log(this.userform.value);
    alert("Form Submited");
  }

  ngOnInit() {
  }

}
