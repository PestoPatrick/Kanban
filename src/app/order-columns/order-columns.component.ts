import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { OrderService } from '../order.service';
import { UpdateOrderService } from '../update-order.service';
import { FormOrder } from '../FormOrder'

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { observable, Observable } from 'rxjs';
import { InvokeFunctionExpr } from '@angular/compiler';
import { __values } from 'tslib';
import { MatDialog } from '@angular/material/dialog';
import { OrderDetailsComponent } from '../order-details/order-details.component';
@Component({
  selector: 'app-order-columns',
  templateUrl: './order-columns.component.html',
  styleUrls: ['./order-columns.component.scss'],
})
export class OrderColumnsComponent implements OnInit {

  constructor(private orderService: OrderService, public dialog: MatDialog, private updateOrderService: UpdateOrderService) { }
  @Input() errorMessage: object;

  neworder: FormOrder;

  ordersJSON = [];

  ordered = [];
  instock = [];
  soaked = [];
  tied = [];
  dyed = [];
  rinsed = [];
  washed = [];
  dried = [];
  ironed = [];
  packaged = [];
  posted = [];
  delivered = [];
  completed = [];

  orders3 = [
    'More random tasks',
    'Random stuff',
    'Newer random stuff',
    'Lots to do'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
      let i = event.currentIndex
      event.container.data[i]['State'] = this.MovingOrders(event.container.id)
      console.log(event.container.data[i]['State'])
      console.log(event.container.data[i])
      this.updateOrder(event.container.data[i]).then().catch(err => {
        this.errorMessage = { error: err }
        console.log(err)
      })

    }
  }

  MovingOrders(id) {
    switch (id) {
      case "cdk-drop-list-0": {
        return "ordered"
      }
      case 'cdk-drop-list-1': {
        return "instock"
      }
      case 'cdk-drop-list-2': {
        return "soaked";
      }
      case 'cdk-drop-list-3': {
        return "tied"
      }
      case 'cdk-drop-list-4': {
        return "dyed"
      }
      case 'cdk-drop-list-5': {
        return "rinsed"
      }
      case 'cdk-drop-list-6': {
        return "washed"
      }
      case 'cdk-drop-list-7': {
        return "dried"
      }
      case 'cdk-drop-list-8': {
        return "ironed"
      }
      case 'cdk-drop-list-9': {
        return "packaged"
      }
      case 'cdk-drop-list-10': {
        return "posted"
      }
      case 'cdk-drop-list-11': {
        return "delivered"
      }
      case 'cdk-drop-list-12': {
        return "completed"
      }
    }
  }



  async updateOrder(order) {
    await this.updateOrderService.updateState(order)
  }

  async getOrders() {
    this.ordersJSON = await this.orderService.getOrders()
    console.log(this.ordersJSON);
  };

  // can do the assigning of orders here instead of
  // making an all orders array


  sortOrders() {
    for (let i in this.ordersJSON) {
      if (this.ordersJSON[i].State === 'ordered') {
        this.ordered.push(this.ordersJSON[i]);
      } else if (this.ordersJSON[i].State === 'instock') {
        this.instock.push(this.ordersJSON[i]);
      } else if (this.ordersJSON[i].State === 'soaked') {
        this.soaked.push(this.ordersJSON[i]);
      } else if (this.ordersJSON[i].State === 'tied') {
        this.tied.push(this.ordersJSON[i]);
      } else if (this.ordersJSON[i].State === 'dyed') {
        this.dyed.push(this.ordersJSON[i]);
      } else if (this.ordersJSON[i].State === 'rinsed') {
        this.rinsed.push(this.ordersJSON[i]);
      } else if (this.ordersJSON[i].State === 'washed') {
        this.washed.push(this.ordersJSON[i]);
      } else if (this.ordersJSON[i].State === 'dried') {
        this.dried.push(this.ordersJSON[i]);
      } else if (this.ordersJSON[i].State === 'ironed') {
        this.ironed.push(this.ordersJSON[i]);
      } else if (this.ordersJSON[i].State === 'packaged') {
        this.packaged.push(this.ordersJSON[i]);
      } else if (this.ordersJSON[i].State === 'posted') {
        this.posted.push(this.ordersJSON[i]);
      } else if (this.ordersJSON[i].State === 'delivered') {
        this.delivered.push(this.ordersJSON[i]);
      } else if (this.ordersJSON[i].State === 'completed') {
        this.completed.push(this.ordersJSON[i]);
      }
    }
  }

  async fetchAndSort() {
    await this.getOrders();
    this.sortOrders();
    return this.ordersJSON
  }

  onClickNewOrder() {
    console.log('new order clicked')
    const dialogRef = this.dialog.open(OrderDetailsComponent, {
      width: '45%', height: '45%', autoFocus: false, data: { neworderinfo: this.neworder }
    })


    // good place to inject the order modifier to turn order back to db format
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog was closed. returned ', result['orderName'])
      this.neworder = result;
      console.log(this.neworder['socials'])
    });
  }

  ngOnInit() {
    let result = this.fetchAndSort();
    console.log(result);
  }

}


// Make an asynchronous function that calls get orders and then sort orders
