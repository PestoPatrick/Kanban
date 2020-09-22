import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Order } from '../order';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent {

  @Input() orderinfo: string;

  orderForm = this.fb.group({
    orderName: ['', Validators.required],
    orderDate: ['', Validators.required],
    orderItems: ['', Validators.required],
    orderDesign: ['', Validators.required],
    orderColours: ['', Validators.required],
    orderAddress: ['', Validators.required],
    orderAmount: ['', Validators.required],
    payment: ['', Validators.required],
    socials: ['', Validators.required],
    deliverymethod: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<OrderDetailsComponent>, @Inject(MAT_DIALOG_DATA) public neworderinfo: Order) { }

  onSubmit() {
    this.dialogRef.close(this.orderForm.value);
    console.log(this.orderForm.get('orderName').value)
  }

  onClose() {
    this.dialogRef.close();
  }

  ngOnInit() {

  }

}
