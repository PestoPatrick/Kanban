import { Component, OnInit, Input } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditOrderComponent } from '../edit-order/edit-order.component';
import { ViewOrderDetailsComponent } from '../view-order-details/view-order-details.component';
import { DateConvertService } from '../date-convert.service';

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

  constructor(
    public dialog: MatDialog,
    public orderService: OrderService,
    private dateModifier: DateConvertService
  ) { }

  openOrder() {
    let orderinfo = this.order;
    orderinfo.Date = this.dateModifier.DateChange(orderinfo.Date);
    const dialogRef = this.dialog.open(ViewOrderDetailsComponent, {
      width: '45%',
      height: '45%',
      autoFocus: false,
      data: { orderinfo },
    });

    dialogRef.afterClosed().subscribe((result) => console.log(result));
  }

  onEditClick() {
    this.order;
    this.order.Date = this.dateModifier.DateChange(this.order.Date);
    console.log(this.order);
    const dialogRef = this.dialog.open(EditOrderComponent, {
      width: '45%',
      height: '45%',
      autoFocus: true,
      data: { orderinfo: this.order },
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      this.order;
      let formresult: FormOrder = result;
      if (lodash.isEqual(this.order, formresult)) {
        console.log("hasn't changed");
      } else {
        await this.orderService.updateOrder(result);
        for (const i in this.order) {
          this.order[i] = formresult[i];
        }
      }
    });
  }

  async onDeleteClick() {
    console.log(this.order._id);
    if (confirm('Are you sure you want to delete' + this.order.Name)) {
      await this.orderService.deleteOrder(this.order._id)
        .then((result) => {
          return result
        })
        .catch((error) => {
          console.log(error)
          return error
        });
    }
  }

  ngOnInit(): void { }
}
