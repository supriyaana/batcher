import { Component, OnInit, Attribute} from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms';


@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.css']
})
export class LecturesComponent implements OnInit {
   private date;
   private lecture;
   private hall_num;
   private selectedlec:string;
  
      userform = new FormGroup({
      lecture:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
      hall_num:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]),
      date:new FormControl,
      time:new FormControl
      })

    
      updateform = new FormGroup({
      lecture: new  FormControl,
      hall_num:new FormControl,
      date:new FormControl,
      time:new FormControl
      })

     lect= [
      {id: 1, lecture:"MongoDb",hall_num:"123", date:"12/3/2017"},
      {id: 2, lecture:"JS",hall_num:"456",date:"10/9/2017"},
    ];
        
      

     private userforms: boolean = true;
     private updateforms: boolean = false;
     private table: boolean = false;
    
    onSubmits(){
      if(this.userforms==true){
        this.userforms = false;
        this.table=true;
        console.log(this.userform.value);
        //alert(" Form Submited");
      }
        
    } 
       onSubmit(){
        console.log(this.userform.value);
        alert(" Form Submited");
       }

       detail(){
          if(this.userforms==true){
          this.userforms = false;
          this.table=true;
          }
       }
       edit(lec){
         if(this.table==true){
           this.table = false;
           this.updateforms=true;
           alert("Do You want To Edit");
          
         }
           this.selectedlec = lec;
        
       }

       update(){
         if(this.updateforms==true){
           this.updateforms = false;
           this.table = true;
         }
       }
        
        delete(){
          this.lect.splice(0,1);
          alert("Do You Want To Delete");
        }

        sort(){
          this.lect.sort();
        }
        
       constructor() { 
        
        }
    
        ngOnInit() {
        }

}
