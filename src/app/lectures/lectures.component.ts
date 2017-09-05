import { Component, OnInit, Attribute} from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms';
import { DatePipe } from '@angular/common';


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
      })

    
      updateform = new FormGroup({
      lecture: new  FormControl,
      hall_num:new FormControl
      })

     lect= [
      {id: 1, lecture:"angular2",hall_num:"123"},
      {id: 2, lecture:"mongodb",hall_num:"456"},
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
      if(this.userforms==true){
        this.userforms = false;
        this.table=true;
        console.log(this.userform.value);
        //alert(" Form Submited");
      }
    }
       edit(lec){
         if(this.table==true){
           this.table = false;
           this.updateforms=true;
          
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
        }
        
      
      
       constructor(@Attribute("format") format) { 
        //this.format = format;
        this.date =  new Date(); 
    
        setInterval(() => {
        this.date =  new Date();
        
        }, 1000);
    
        }
   
        ngOnInit() {
        }

}
