import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-lecturer',
  templateUrl: './lecturer.component.html',
  styleUrls: ['./lecturer.component.css']
})
export class LecturerComponent implements OnInit {

lecturers =[
  {name:"Sarita",mobile:"9324567802",address:"Pune",salary:"10000",date:"12/4/2017", qualification:"MCA"}

  ];

      private lecturerforms:boolean = true;
      private updateforms:boolean =  false;
      private table:boolean = false;
      selectedlec:string;

    lecturer = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(8)]),
    mobilenumber:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(12)]),
    address:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(8)]),
    salary:new FormControl('',[Validators.required,Validators.maxLength(8),Validators.minLength(6)]),
    date:new FormControl('',[Validators.required]),
    qualification: new FormControl ('',[Validators.required,Validators.maxLength(8),Validators.minLength(6)]),
  
  });

  lecupdate = new FormGroup({
  name:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(8)]),
  mobilenumber:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(8)]),
  address:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(8)]),
  salary:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(8)]),
  date:new FormControl,
  qualification: new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(8)])
  
});

  Submit(){
    console.log(this.lecturer.value);
    alert("Lecturer Form Submitted");
  } 
  detail(){
    if(this.lecturerforms==true){
      this.lecturerforms = false;
      this.table=true;
    }
  }

  onSubmits(){
    console.log(this.lecupdate.value);
    //alert("Update Form Submited");
  }

      edit(lec){
        if(this.table==true){
          this.table = false;
          this.updateforms=true;
        }
        this.selectedlec = lec;
        alert("Do You Want To Edit");
      }

      update(){
        if(this.updateforms==true){
          this.updateforms = false;
          this.table = true;
        }
        }
          
      delete(){
        this.lecturers.splice(0,1);
        alert("Do You Want To delete");
      }



  constructor() { }

  ngOnInit() {
  }

}
