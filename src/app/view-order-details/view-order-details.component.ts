import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderColumnsComponent } from '../order-columns/order-columns.component';
import { Order } from '../order';
import { FormControl, FormGroup } from '@angular/forms';
import { MatRadioButton } from '@angular/material/radio'

@Component({
  selector: 'app-view-order-details',
  templateUrl: './view-order-details.component.html',
  styleUrls: ['./view-order-details.component.scss']
})
export class ViewOrderDetailsComponent implements OnInit {
  @Input() order: Order;
  @Input() orderedFrom: string;
  @Input() payMethod: string;
  @Input() deliveryMethod: string;
  @Input() edit = false

  constructor(public dialogRef: MatDialogRef<ViewOrderDetailsComponent>, @Inject(MAT_DIALOG_DATA) public orderinfo) { }

  PayMethod() {
    if (this.orderinfo.orderinfo.Bank_Transfer == true) {
      this.payMethod = "Bank Transfer";
    } else if (this.orderinfo.orderinfo.PayPal == true) {
      this.payMethod = "PayPal";
    } else if (this.orderinfo.orderinfo.Cash == true) {
      this.payMethod = "Cash";
    }
  }

  OrderedFrom() {
    if (this.orderinfo.orderinfo.FB == true) {
      this.orderedFrom = "FB";
    } else if (this.orderinfo.orderinfo.Instagram == true) {
      this.orderedFrom = "Instagram";
    } else if (this.orderinfo.orderinfo.Email == true) {
      this.orderedFrom = "Email";
    }
  }

  DeliveryMethod() {
    if (this.orderinfo.orderinfo.Collection == true) {
      this.deliveryMethod = "Collection";
    } else if (this.orderinfo.orderinfo.Delivery == true) {
      this.deliveryMethod = "Delivery";
    } else if (this.orderinfo.orderinfo.Post == true) {
      this.deliveryMethod = "Post";
    }
  }



  onCloseClick() {
    this.dialogRef.close();
    console.log(this.dialogRef)
  }

  onCloseSave() {
    this.dialogRef.close();
    console.log(this.dialogRef)
  }

  ngOnInit() {
    this.PayMethod()
    this.OrderedFrom()
    this.DeliveryMethod()
    console.log(this.orderinfo.orderinfo.Name)
  }

}
