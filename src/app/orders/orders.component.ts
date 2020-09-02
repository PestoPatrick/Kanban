import { Component, OnInit, Input } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Order } from '../order';
import { OrderDetailsComponent } from '../order-details/order-details.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  @Input() order: Order;


  constructor(private dialog: MatDialog) { }

  openOrder() {
    const dialogRef = this.dialog.open(OrderDetailsComponent, {
      width: '45%', height: '33%', autoFocus: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog was closed' + result);
    });
  }



  ngOnInit(): void {

  }
}
