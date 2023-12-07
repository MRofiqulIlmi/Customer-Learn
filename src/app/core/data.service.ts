import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';

import { ICustomer, IOrder } from '../../app/shared/interfaces';

@Injectable()
export class DataService {
  baseUrl: string = 'assets/';

  constructor(private http: HttpClient) {}

  //observable use for async process like a http request. than ICustomer[] is expected return from this function,
  // and the pipe is for a task after process get success before provide to component, like filtering only the id is true. or do something is error happen.
  getCustomers(): Observable<ICustomer[]> {
    return this.http
      .get<ICustomer[]>(this.baseUrl + 'customers.json')
      .pipe(catchError(this.handleError));
  }

  getCustomer(id: number): Observable<ICustomer> {
    return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json').pipe(
      map((customers) => {
        let customer = customers.filter((cust: ICustomer) => cust.id == id);
        return customer[0];
      }),
      catchError(this.handleError)
    );
  }

  getOrders(id: number): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(this.baseUrl + '/orders.json').pipe(
      map((orders) => {
        let custOrder = orders.filter((ord: IOrder) => ord.customerId == id);
        return custOrder;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return throwError(() => new Error(errMessage));
    }
    return throwError(() => new Error(error || 'Node.js server error'));
  }
}
