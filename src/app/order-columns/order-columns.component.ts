import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { observable, Observable } from 'rxjs';
import { InvokeFunctionExpr } from '@angular/compiler';

@Component({
  selector: 'app-order-columns',
  templateUrl: './order-columns.component.html',
  styleUrls: ['./order-columns.component.scss'],
})
export class OrderColumnsComponent implements OnInit {

  constructor(private orderService: OrderService) { }

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


  orders2 = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog',
  ];

  orders3 = [
    'More random tasks',
    'Random stuff',
    'Newer random stuff',
    'Lots to do'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      console.log(
        moveItemInArray(
          event.container.data,
          event.previousIndex,
          event.currentIndex
        )
      );
    } else {
      console.log(
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        )
      );
    }
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
    // console.log(this.ordersJSON);
    this.sortOrders();
    return this.ordersJSON
    // console.log(this.ordersJSON);
    // console.log(this.completed);
  }


  ngOnInit() {
    let result = this.fetchAndSort();
    // this.getOrders();
    console.log(result);

  }
}


// Make an asynchronous function that calls get orders and then sort orders
