import { Component, OnInit,Attribute, } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admisionreceipt',
  templateUrl: './admisionreceipt.component.html',
  styleUrls: ['./admisionreceipt.component.css']
})
export class AdmisionreceiptComponent implements OnInit {
  private date;
  userform = new FormGroup({
  name: new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
  paid: new FormControl ("",[Validators.required,Validators.minLength(4),Validators.maxLength(7)]),
  authorised: new FormControl ("",[Validators.required,Validators.minLength(8),Validators.maxLength(10)]),
  
})
constructor(@Attribute("format") format) { 
    this.date =  new Date(); 
    
    setInterval(() => {
        this.date =  new Date();
     }, 1000);
  } 
  today: number = Date.now();


  ngOnInit() {
  }

}
