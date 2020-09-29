import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderColumnsComponent } from '../order-columns/order-columns.component';
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
    _id: [this.orderinfo.orderinfo._id],
    Name: [this.orderinfo.orderinfo.Name, Validators.required],
    Date: [this.orderinfo.orderinfo.Date, Validators.required],
    Item: [this.orderinfo.orderinfo.Item, Validators.required],
    Design: [this.orderinfo.orderinfo.Design, Validators.required],
    Colour: [this.orderinfo.orderinfo.Colour, Validators.required],
    Address: [this.orderinfo.orderinfo.Address, Validators.required],
    Amount: [this.orderinfo.orderinfo.Amount, Validators.required],
    Payment: [this.orderinfo.orderinfo.Payment, Validators.required],
    Socials: [this.orderinfo.orderinfo.Socials, Validators.required],
    DeliveryMethod: [this.orderinfo.orderinfo.DeliveryMethod, Validators.required],
    State: [this.orderinfo.orderinfo.State],
  })



  onSubmit() {
    this.dialogRef.close(this.editOrderForm.value);
  }

  onClose() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
