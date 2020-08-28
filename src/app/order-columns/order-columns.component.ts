import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-order-columns',
  templateUrl: './order-columns.component.html',
  styleUrls: ['./order-columns.component.scss'],
})
export class OrderColumnsComponent implements OnInit {
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

  sortOrders() {

  }

  getOrders() {
    this.orderService.getOrders()
      .subscribe((orders: Order[]) => {
        this.ordersJSON = orders;
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
        console.log(this.ordersJSON);
      });
  }
  // can do the assigning of orders here instead of
  // making an all orders array


  async fetchAndSort() {
    await this.getOrders();
    console.log(this.ordersJSON);
    await this.sortOrders();
    console.log(this.ordersJSON);
    console.log(this.completed);
  }

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.getOrders();
    console.log(this.ordersJSON);

  }
}


// Make an asynchronous function that calls get orders and then sort orders
