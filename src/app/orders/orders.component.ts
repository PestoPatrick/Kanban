import { Component, OnInit, Input } from '@angular/core';

import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Order } from '../order';
import { OrderDetailsComponent } from '../order-details/order-details.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  @Input() order: Order;


  openOrder() {
    const dialogRef = this.dialog.open(OrderDetailsComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

    // const modalDialog = this.dialog.open(OrderDetailsComponent, dialogRef)

  }


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { }
}
