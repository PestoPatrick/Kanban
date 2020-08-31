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

  // openOrder(): void {

  //   const dialogConfig = new MatDialogConfig();

  //   dialogConfig.autoFocus = true;
  //   dialogConfig.disableClose = false;
  //   dialogConfig.height = '25%';
  //   dialogConfig.width = '25%';

  //   this.dialog.open(OrderDetailsComponent, dialogConfig);

  //   // const modalDialog = this.dialog.open(OrderDetailsComponent, dialogRef)

  // }

  openOrder() {
    const dialogRef = this.dialog.open(OrderDetailsComponent, {
      width: '33%', height: '33%', autoFocus: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog was closed' + result);
    });
  }



  ngOnInit(): void { }
}
