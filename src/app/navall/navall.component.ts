import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'
import { MatDialog } from '@angular/material/dialog';
import { DilogComponent } from '../dilog/dilog.component';
@Component({
  selector: 'app-navall',
  templateUrl: './navall.component.html',
  styleUrls: ['./navall.component.css']
})
export class NavallComponent implements OnInit {

  constructor(private fb: FormBuilder, private http: HttpClient, public dialog: MatDialog) { }
  isSubmitted: boolean = false;

  public myForm: any;
  openDilog(): void {
    const dialogRef = this.dialog.open(DilogComponent, {


    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  ngOnInit(): void {

    this.myForm = this.fb.group({
      fname: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      email: ['', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      enqtype: ['', Validators.required],
      center: ['', Validators.required],
      lname: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      mobaile: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      enqsource: ['', Validators.required],
      course: ['', Validators.required],
      remark: ['', Validators.required],

    })
  }
  onClose() {
    this.myForm.close();

    Swal.fire({
      title: "Are you  want to Close!",
      text: "Do you want to continue",
      icon: "warning",

      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value == true) {
        this.myForm = false;
      }
    })
  }  

  onSubmitForm() {

    console.log(this.myForm);
    console.log(this.myForm.value);
    this.isSubmitted = true;

    if (this.myForm.valid) {
      Swal.fire({
        title: "Thank You",
        text: "Data Submitted Successfully",
        icon: "success",
        confirmButtonText: 'Okay',

      })
      this.myForm.reset();
    } else {
      return;
    }
  }
  onSubmit() {
    if (this.myForm.valid) {

      console.log(this.myForm);
      console.log(this.myForm.value);
      this.isSubmitted = true;


      Swal.fire({
        title: "Thank You",
        text: "Data Submitted Successfully",
        icon: "success",
        confirmButtonText: 'Okay',
      })
      this.myForm.closed();
    } else {
      Swal.fire({
        title: "Sorry... ",
        text: "Please Enter All Fields",
        icon: "error",
        confirmButtonText: 'Okay'
      })
    }

  }
  get formControl() {
    return this.myForm.controls;

  }

}

