import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderColumnsComponent } from '../order-columns/order-columns.component';
import { DBOrder } from '../DBorder';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {

  constructor(public fb: FormBuilder, public dialogRef: MatDialogRef<EditOrderComponent>, @Inject(MAT_DIALOG_DATA) public orderinfo) { }

  // next need to make service with a function to convert order to what it needs to look like to be used in the form such as time and text for payment method etc
  // and then make another function that converts it back to the database format of boolean options and time format



  editOrderForm = this.fb.group({
    orderName: [this.orderinfo.orderinfo.Name, Validators.required],
    orderDate: [this.orderinfo.orderinfo.Date, Validators.required],
    orderItems: [this.orderinfo.orderinfo.Item, Validators.required],
    orderDesign: [this.orderinfo.orderinfo.Design, Validators.required],
    orderColours: [this.orderinfo.orderinfo.Colour, Validators.required],
    orderAddress: [this.orderinfo.orderinfo.Address, Validators.required],
    orderAmount: [this.orderinfo.orderinfo.Amount, Validators.required],
    payment: [this.orderinfo.orderinfo.payment, Validators.required],
    socials: [this.orderinfo.orderinfo.socials, Validators.required],
    deliverymethod: [this.orderinfo.orderinfo.deliverymethod, Validators.required]
  })



  onSubmit() { }

  onClose() {
    this.dialogRef.close();
    this.dialogRef.close(this.editOrderForm.value);
  }

  ngOnInit(): void {
  }

}
