import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderColumnsComponent } from '../order-columns/order-columns.component';
import { Order } from '../order';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent {

  @Input() description: string;

  orderForm = new FormGroup({
    orderName: new FormControl(''),
    orderDate: new FormControl(''),
    orderItems: new FormControl(''),
    orderDesign: new FormControl(''),
    orderColours: new FormControl(''),
    orderAddress: new FormControl(''),
    orderAmount: new FormControl(''),

  })

  constructor(public dialogRef: MatDialogRef<OrderDetailsComponent>, @Inject(MAT_DIALOG_DATA) public neworder: Order) { }
  onCloseClick() {
    this.dialogRef.close(this.neworder);
    console.log(this.dialogRef)
  }

  onCloseSave() {
    // this.dialogRef.close();
    console.log(this.dialogRef)
  }

  ngOnInit() {
    console.log(this.neworder)
  }

}
