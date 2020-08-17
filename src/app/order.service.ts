import { Injectable } from '@angular/core';
import { Order } from './order'
import { ORDERS } from './mock-orders';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  getTasks(): Observable<Order[]> {
    return of(ORDERS);
  }
}
