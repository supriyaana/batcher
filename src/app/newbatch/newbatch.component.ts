import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-newbatch',
  templateUrl: './newbatch.component.html',
  styleUrls: ['./newbatch.component.css']
})
export class NewbatchComponent implements OnInit {

  newbatches =[
    {name:"aniket", batchname:"B"}
  ];

  newbatchform = new FormGroup({
     name:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(7)]),
     batch:new FormControl ("",[Validators.required,Validators.minLength(1),Validators.maxLength(3)])
  });

      private batchforms:boolean = true;
      private table:boolean = false;

  onSubmit(){
  console.log(this.newbatchform.value);
  alert("Form Submitted ");
  }

detail(){
    if(this.batchforms==true){
    this.batchforms = false;
    this.table=true;
    }
  }
  
  delete(){
      this.newbatches.splice(0,1);
      alert("Do You Want To delete");
    }


  constructor() { }

  ngOnInit() {
  }

}
