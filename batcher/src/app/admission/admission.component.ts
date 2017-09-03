import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {
  userform = new FormGroup({
    name: new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(8)]),
    email: new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
    mobile: new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(12)]),
    address: new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
    coursetype:new FormControl,
    sub:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(7)])
      
  });

  onSubmit(){
    console.log(this.userform.value);
    alert('form submitted');
  }


  constructor() { }

  ngOnInit() {
  }

}
