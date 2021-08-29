import {Injectable} from '@angular/core';
import {Customer} from './customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  message: string;
  API_URL = 'http://localhost:3000/customerList';

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL);
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API_URL + '/' + id);
  }

  createCustomer(customer: Partial<Customer>): Observable<Customer> {
    // @ts-ignore
    return this.httpClient.post(this.API_URL, customer);
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.patch<Customer>(this.API_URL + '/' + customer.id, customer);
    console.log('update ok: ' + customer.id);
  }

  deleteById(id: number): Observable<Customer> {
    // @ts-ignore
    return this.httpClient.delete(this.API_URL + '/' + id);
  }

  searchAll(keyword: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL + '?q=' + keyword);
  }

  sortAll() {
    return this.httpClient.get(this.API_URL + '?_sort=nameCustomer');
  }

  deleteCustomer(id) {
    return this.httpClient.delete(this.API_URL + '/' + id);
  }
}
