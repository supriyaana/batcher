import { Component, OnInit, Attribute } from '@angular/core';
import { FormGroup,FormControl,Validators } from "@angular/forms";
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css'],
})
export class FeesComponent implements OnInit {
   private date;
    userform = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(10)]),
    paid_fees:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(6)]),
    remain_fees:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(10)])

  })

  constructor(@Attribute("format") format) { 
    //this.format = format;
    this.date =  new Date(); 
    
    setInterval(() => {
        this.date =  new Date();
     }, 1000);
  } 
  today: number = Date.now();


  onSubmit(){
    console.log(this.userform.value);
    alert("Form Submited");
  }
      

  ngOnInit() {
  }

}
