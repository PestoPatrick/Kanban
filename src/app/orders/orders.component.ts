import { Component, OnInit, Input } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditOrderComponent } from '../edit-order/edit-order.component';
import { DBOrder } from '../DBorder';
import { ViewOrderDetailsComponent } from '../view-order-details/view-order-details.component';
import { OrderModifierService } from "../order-modifier.service";
import { OrderService } from '../order.service';
import { FormOrder } from '../FormOrder';

import * as lodash from 'lodash';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  @Input() order;



  constructor(public dialog: MatDialog, public orderModifier: OrderModifierService, public orderUpdate: OrderService) { }

  openOrder() {
    const dialogRef = this.dialog.open(ViewOrderDetailsComponent, {
      width: '45%', height: '45%', autoFocus: false, data: { orderinfo: this.order }
    });



  }

  onEditClick() {
    console.log(this.order)
    const dialogRef = this.dialog.open(EditOrderComponent, {
      width: '45%', height: '45%', autoFocus: true, data: { orderinfo: this.order }
    });

    dialogRef.afterClosed().subscribe(result => {
      let orderinfo = this.order
      let formresult: FormOrder = result;
      if (lodash.isEqual(orderinfo, formresult)) {
        console.log("hasn't changed");
      } else {
        this.orderUpdate.updateOrder(result);
        for (const i in this.order) {
          this.order[i] = formresult[i]
        }
      }
    })
  }
  ngOnInit(): void {

  }
}
