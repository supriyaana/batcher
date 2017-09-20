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
      private userforms: boolean = true;
      private updateforms: boolean = false;
      private table: boolean = false;
      private selectedfees:string;

   fees=[
     {name:"supriya",paidfees:"10000",remainfees:"5000"}
   ]    

    userform = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(10)]),
    paid_fees:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(6)]),
    remain_fees:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(10)])

  });

   updateform = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(10)]),
    paid_fees:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(6)]),
    remain_fees:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(10)])

  });
  onSubmits(){
      if(this.userforms==true){
        this.userforms = false;
        this.table=true;
        console.log(this.userform.value);
        //alert(" Form Submited");
      }
        
    } 
       onSubmit(){
      if(this.userforms==true){
        this.userforms = false;
        this.table=true;
        console.log(this.userform.value);
        //alert(" Form Submited");
      }
    }
       edit(fee){
         if(this.table==true){
           this.table = false;
           this.updateforms=true;
          
         }
           this.selectedfees = fee;
        
       }

       update(){
         if(this.updateforms==true){
           this.updateforms = false;
           this.table = true;
         }
       }
        
        delete(){
          this.fees.splice(0,1);
        }
        


  constructor(@Attribute("format") format) { 
    //this.format = format;
    this.date =  new Date(); 
    
    setInterval(() => {
        this.date =  new Date();
     }, 1000);
  } 
  today: number = Date.now();

   

  ngOnInit() {
  }

}
