import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class UpdateOrderService {

  OrdersUrl = 'http://ec2-3-8-216-76.eu-west-2.compute.amazonaws.com:3000/orders/'

  constructor(private http: HttpClient) { }

  updateOrder(order) {
    this.http.patch<Order>(this.OrdersUrl, order)
  }

  async updateState(order) {
    await this.http.patch<Order>(this.OrdersUrl, order).toPromise
  }
}
