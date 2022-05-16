import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { GreenserviceService } from '../greenservice.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
public empData:any;
public myform:any;
  constructor(private ser:GreenserviceService,private fb:FormBuilder,private rt:Router) { }

  ngOnInit(): void {
        
    this.myform= this.fb.group({
      name:[''], 
      age:[''],
      empId:[''],
      branch:[''],
      role:['']

    })
    this.ser.getData().subscribe((res:any)=>{
      console.log(res);
      this.empData= res;
    })
    }
   onDelete(id:any){
    this.ser.deletedata(id).subscribe(
     (res:any)=>{
    console.log(res);
    window.location.reload();
     }
   )
     }
 

  onSubmitForm(){
    console.log(this.myform);
    console.log(this.myform.value);
    this.ser.postdata(this.myform.value).subscribe(
    (res:any)=>{
      console.log(res);
      window.location.reload();
      
    },
    (err:any)=>{
      console.log(err);
    }
  )
  }
}
