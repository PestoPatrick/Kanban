import { Injectable } from '@angular/core';
import { Order } from './order';
import { OrderColumn } from './order-column';
import { OrderService } from './order.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortOrdersService {

  constructor(private orderService: OrderService) { }

  ordersJSON = {};

  orderColumns: OrderColumn;

  getOrders(): any {
    this.orderService.getOrders()
      .subscribe((orders: Order[]) => {
        this.ordersJSON = orders;
        console.log(this.ordersJSON)
        for (let i in this.ordersJSON) {
          if (this.ordersJSON[i].State === 'ordered') {
            this.orderColumns.Ordered.push(this.ordersJSON[i]);
          }
          else if (this.ordersJSON[i].State === 'InStock') {
            this.orderColumns.InStock.push(this.ordersJSON[i]);
          }
          else if (this.ordersJSON[i].State === 'Soak') {
            this.orderColumns.Soak.push(this.ordersJSON[i]);
          }
          else if (this.ordersJSON[i].State === 'Tied') {
            this.orderColumns.Tied.push(this.ordersJSON[i]);
          }
          else if (this.ordersJSON[i].State === 'Dyed') {
            this.orderColumns.Dyed.push(this.ordersJSON[i]);
          }
          else if (this.ordersJSON[i].State === 'Rinsed') {
            this.orderColumns.Rinsed.push(this.ordersJSON[i]);
          }
          else if (this.ordersJSON[i].State === 'Washed') {
            this.orderColumns.Washed.push(this.ordersJSON[i]);
          }
          else if (this.ordersJSON[i].State === 'Dry') {
            this.orderColumns.Dry.push(this.ordersJSON[i]);
          }
          else if (this.ordersJSON[i].State === 'Iron') {
            this.orderColumns.Iron.push(this.ordersJSON[i]);
          }
          else if (this.ordersJSON[i].State === 'Package') {
            this.orderColumns.Package.push(this.ordersJSON[i]);
          }
          else if (this.ordersJSON[i].State === 'Posted') {
            this.orderColumns.Posted.push(this.ordersJSON[i]);
          }
          else if (this.ordersJSON[i].State === 'Delivered') {
            this.orderColumns.Delivered.push(this.ordersJSON[i]);
          }
          else if (this.ordersJSON[i].State === 'Completed') {
            this.orderColumns.Completed.push(this.ordersJSON[i]);
          }
        }

        console.log(this.orderColumns);
        return this.orderColumns;
      });
  }
}

