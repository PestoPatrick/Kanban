import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormOrder } from './FormOrder';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private AllOrdersUrl =
    'http://ec2-3-8-216-76.eu-west-2.compute.amazonaws.com:3000/orders/all';
  private OrdersUrl =
    'http://ec2-3-8-216-76.eu-west-2.compute.amazonaws.com:3000/orders/';

  constructor(private http: HttpClient) { }

  async getOrders() {
    return await this.http.get<FormOrder[]>(this.AllOrdersUrl).toPromise();
  }

  async updateOrder(order) {
    return await this.http.patch<FormOrder>(this.OrdersUrl, order).toPromise();
    console.log('order changed' + order);
  }

  async updateState(order) {
    await this.http.patch<FormOrder>(this.OrdersUrl, order).toPromise();
  }

  async newOrder(order) {
    console.log(order);
    return await this.http.post(this.OrdersUrl, order).toPromise();
  }

  async deleteOrder(orderid) {
    return await this.http.delete(this.OrdersUrl + orderid).toPromise();
  }
}
