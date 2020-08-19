import { Injectable } from '@angular/core';
import { Order } from './order';
import { OrderColumn } from './order-column';

@Injectable({
  providedIn: 'root'
})
export class SortOrdersService {

  orderColumns: OrderColumn[];

  sortOrders(orders: Array<[]>) {

  }

  constructor() { }
}
