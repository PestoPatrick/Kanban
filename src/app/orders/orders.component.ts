import { Component, OnInit, Input } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditOrderComponent } from '../edit-order/edit-order.component';
import { Order } from '../order';
import { ViewOrderDetailsComponent } from '../view-order-details/view-order-details.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  @Input() order: Order;


  constructor(public dialog: MatDialog) { }

  openOrder() {
    const dialogRef = this.dialog.open(ViewOrderDetailsComponent, {
      width: '45%', height: '45%', autoFocus: false, data: { orderinfo: this.order }
    });



  }

  onEditClick() {
    const dialogRef = this.dialog.open(EditOrderComponent, {
      width: '45%', height: '45%', autoFocus: false, data: { orderinfo: this.order }
    });
  }
  ngOnInit(): void {

  }
}
