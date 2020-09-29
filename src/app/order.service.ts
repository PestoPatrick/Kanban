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
  private OrdersUrl = 'http://ec2-3-8-216-76.eu-west-2.compute.amazonaws.com:3000/orders/all';
  private UpdateOrdersUrl = 'http://ec2-3-8-216-76.eu-west-2.compute.amazonaws.com:3000/orders/'


  constructor(private http: HttpClient) { }

  async getOrders() {
    return await this.http.get<FormOrder[]>(this.OrdersUrl).toPromise()
    // .pipe(retry(3), catchError(this.handleError<Order[]>('getOrders', []))
  }

  updateOrder(order) {
    // this.http.patch<DBOrder>(this.UpdateOrdersUrl, order).toPromise()
    console.log('order changed' + order)
  }

  async updateState(order) {
    await this.http.patch<FormOrder>(this.UpdateOrdersUrl, order).toPromise()
  }

  async newOrder(order) {
    await this.http.put<FormOrder>(this.UpdateOrdersUrl, order).toPromise()
  }



















  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
