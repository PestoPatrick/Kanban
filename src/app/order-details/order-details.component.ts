import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DBOrder } from '../DBorder';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent {



  orderForm = this.fb.group({
    Name: ['', Validators.required],
    Date: ['', Validators.required],
    Item: ['', Validators.required],
    Design: ['', Validators.required],
    Colour: ['', Validators.required],
    Address: ['', Validators.required],
    Amount: ['', Validators.required],
    payment: ['', Validators.required],
    socials: ['', Validators.required],
    deliverymethod: ['', Validators.required],
    State: ['ordered']
  })

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<OrderDetailsComponent>, @Inject(MAT_DIALOG_DATA) public neworderinfo) { }

  onSubmit() {
    this.dialogRef.close(this.orderForm.value);
    console.log(this.orderForm.value)
  }

  onClose() {
    this.dialogRef.close();
  }

  ngOnInit() {

  }

}
