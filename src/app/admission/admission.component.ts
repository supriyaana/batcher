
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {
   

    admission = [
      {name:"supi",email:"supriya@gmail.com",mobile:9786456321,address:"parbhani",coursetype:"frontend",sub:"angular2"}
    ];


    userform = new FormGroup({
    name: new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(8)]),
    email: new FormControl("",[Validators.required,Validators.minLength(15),Validators.maxLength(20)]),
    mobile: new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(12)]),
    address: new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
    coursetype:new FormControl,
    sub:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(7)])
      
  });

      private userforms:boolean = true;
       private updateforms:boolean =  false;
       private table:boolean = false;
       selectedadmission:any;

       
      updateform = new FormGroup({
      name:new FormControl("",[Validators.required,Validators.minLength(7),Validators.maxLength(8)]),
      email:new FormControl("",[Validators.required,Validators.minLength(15),Validators.maxLength(20)]),
      mobile:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(7)]),
      address:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(8)]),
      coursetype:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(8)]),
      sub:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(8)])
     });

   
    detail(){
      if(this.userforms==true){
        this.userforms = false;
        this.table=true;
      }
    }

    onSubmits(){
      console.log(this.updateform.value);
      //alert("Update Form Submited");
    }

       edit(adm){
         if(this.table==true){
           this.table = false;
           this.updateforms=true;
         }
         
         this.selectedadmission = adm;
         alert("Do You Want To Edit");
       }

       update(){
         if(this.updateforms==true){
           this.updateforms = false;
           this.table = true;
         }
          }
           
        delete(){
          this.admission.splice(0,1);
          alert("Do You Want To delete");
        }

      submit(){
      console.log(this.userform.value);
     // alert('form submitted');
  }


  constructor() { }

  ngOnInit() {
  }

}